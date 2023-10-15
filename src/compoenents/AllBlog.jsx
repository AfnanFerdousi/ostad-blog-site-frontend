import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs"
import BlogCard from "./BlogCard";

const AllBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/blog?searchText=${searchText}`);
                if (res.data.status === "success") {
                    setBlogs(res?.data?.data)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getBlogs();
    }, [searchText])
        console.log(blogs)
    return (
        <div className="px-[4rem] py-[3rem]">
      <div>
                <h2 className="text-3xl font-semibold  text-[#333]"><span className="text-4xl  font-oswald text-gray-500 mr-2">##</span>Blogs</h2>
                <div className="flex items-center gap-x-2">
                    <input
                        type="search"
                        placeholder="search blog names"
                        className="input input-bordered w-full max-w-3xl font-mulish mt-4 py-6"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="btn btn-primary"><BsSearch/></button>
                </div>

                <div className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {
                            blogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                        }
                    </div>

                </div>

      </div>

        </div>
    );
};

export default AllBlog;