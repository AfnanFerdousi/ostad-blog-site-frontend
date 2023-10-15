/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';
import {FaRegComment} from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'

const formatDateString = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogCard = ({ blog }) => {
    const formattedDate = formatDateString(blog.createdAt);
    const [isLiked, setIsLiked] = useState(false);
    const token = Cookies.get("token")
// console.log(token)
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
                
                if (res.data.status === "success") {
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
    return (
        <div className="p-6 flex  gap-x-6 border-[3px] border-[#ddd] rounded-lg hover:shadow-lg cursor-pointer hover:ease-out translate-x-3">
            <div>
                <img src={blog?.image} alt={blog?.title} className="rounded-lg h-[35vh]" />
            </div>
            <div className='flex flex-col justify-between py-8'>
                <div>
                <h2 className="text-2xl font-bold font-oswald">{blog.title}</h2>
                <div className="mt-2 flex items-center gap-x-4">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={blog?.author?.profileImg} />
                        </div>
                    </div>
                    <div className="font-mulish text-md text-[#333] font-semibold">
                        <h2>{blog.author.name}</h2>
                        <h2>Posted on: {formattedDate}</h2>
                    </div>
                    </div>
                <div className="py-6 font-mulish text-lg text-gray-500">{blog.content.slice(0, 100)}... <Link className='text-primary underline' to={`/blog/${blog._id}`}>Read More</Link></div>
                </div>
                <div className="flex items-center gap-x-6">
                    <div className="flex items-center gap-x-2">
                        <button onClick={toggleLike} className='text-red-500 text-4xl'>
                            {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
                        </button>
                        <span>{blog.likes.length}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <button className="text-3xl text-gray-500 font-medium" onClick={shareBlog}><BiShare /></button>
                        <span>{blog.shares.length}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <button className="text-3xl text-gray-500 font-medium"><FaRegComment /></button>
                        <span>{blog.comments.length}</span>
                    </div>
              </div>
            </div>
        </div>
    );
};

export default BlogCard;

