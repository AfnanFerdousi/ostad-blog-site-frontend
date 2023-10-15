import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineSend } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';
import { FaRegComment } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "./Loader";

const formatDateString = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};


const SingleBlogComp = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const formattedDate = formatDateString(blog.createdAt);
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [comment, setComment] = useState("")


    useEffect(() => {

        const getSingleBlog = async () => {

            try {
                const res = await axios.get(`http://localhost:5000/api/v1/blog/${id}`);

                if (res.data.status === "success") {
                    setBlog(res.data?.data)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
                setLoading(false)
            }

        }

        const fetchUser = async () => {
            setLoading(true)
            try {
                const headers = {
                    authorization: `${token}`
                }
                const res = await axios.get(`http://localhost:5000/api/v1/user/${email}`, null, { headers });
                if (res.data.status === "success") {
                    setUser(res.data.data);
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        fetchUser()
        getSingleBlog()
    }, [id, email, token]);

    const toggleLike = async () => {
        try {
            const headers = {
                authorization: `${token}`, // Use "Bearer" format for the token
            };
            const response = await axios.post(`http://localhost:5000/api/v1/blog/like/${blog._id}`, null, { headers });

            if (response.data.status === 'success') {
                setIsLiked(!isLiked);
            } else {
                console.error('Error while liking/disliking blog:', response.data.error);
            }
        } catch (error) {
            console.error('Error while making the API request:', error);
        }
    };
    const shareBlog = async () => {
        Swal.fire({
            title: 'Are you sure you want to share this blog?',
            showCancelButton: true,
            confirmButtonText: 'Share',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                const headers = {
                    authorization: `${token}`, // Use "Bearer" format for the token
                };
                const res = axios.post(`http://localhost:5000/api/v1/blog/share/${blog._id}`, null, { headers });

                if (res.status === "success") {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Blog shared successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }

        })

    }

    const postComment = async (e) => {
        e.preventDefault()
        try {
            const headers = {
                authorization: `${token}`, // Use "Bearer" format for the token
            };
            const res = await axios.post(`http://localhost:5000/api/v1/blog/post-comment/${blog._id}`,
                {
                    body: {
                        comment,
                        author: user,
                        blog
                   }
                }, { headers });

            if (res.data.status === "success") {
                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: 'Comment posted successfully',
                //     showConfirmButton: false,
                //     timer: 1500
                // })
                console.log(res)
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    console.log(comment)
    return (
        <>
            {loading ? <Loader /> : (
                <div className="px-12">
                    <div className=" py-8 ">
                        <img src={blog?.image} alt={blog?.title} className="h-[80vh] w-full rounded-3xl " />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold font-oswald">{blog.title}</h2>
                        <div className="mt-2 flex items-center gap-x-4">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={blog?.author?.profileImg} />
                                </div>
                            </div>
                            <div className="font-mulish text-md text-[#333] font-semibold">
                                <h2>{blog?.author?.name}</h2>
                                <h2>Posted on: {formattedDate}</h2>
                            </div>
                        </div>

                        <p className="text-md font-medium font-mulish text-gray-700 py-8">{blog.content}</p>
                    </div>

                    <div className="flex items-center gap-x-6">
                        <div className="flex items-center gap-x-2">
                            <button onClick={toggleLike} className='text-red-500 text-4xl'>
                                {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
                            </button>
                            <span>{blog?.likes.length}</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <button className="text-3xl text-gray-500 font-medium" onClick={shareBlog}><BiShare /></button>
                            <span>{blog?.shares.length}</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <button className="text-3xl text-gray-500 font-medium"><FaRegComment /></button>
                            <span>{blog?.comments.length}</span>
                        </div>
                    </div>

                    <div className="p-4 bg-[#fff]">
                        <h2 className="text-xl py-6">Comments</h2>

                        <form className="bg-[#ddd] p-4 rounded-md">
                            <div className="mt-2 flex items-center gap-x-4">
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.profileImg} />
                                    </div>
                                </div>
                                <div className="font-mulish text-md text-[#333] font-semibold capitalize">
                                    <h2>{user?.name}</h2>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <input
                                    type="text" placeholder="Type here"
                                    className="input input-bordered input-primary w-full max-w-md mt-4"
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button onClick={(e) => postComment(e)} type="submit" className="text-3xl mt-[10px]"><AiOutlineSend /></button>
                           </div>
                     </form>



                    </div>



                </div>
            )}
        </>
    );
};

export default SingleBlogComp;