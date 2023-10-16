/* eslint-disable react/no-unknown-property */
import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";


const CreateBlogComp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const token = Cookies.get("token")
    const userId = Cookies.get("id")
    const onCreateBlog = async (data) => {
        console.log(data.tags)
        const tagArr = data.tags.split(',').map((tag) => tag.trim());
        try {
            const res = axios.post("http://localhost:5000/api/v1/blog/create-blog", {
                title: data.title,
                author: userId,
                tags: tagArr,
                image: data.image,
                content: data.content
            }, {
                headers: {
                    authorization: `${token}`
                }
            })

            if (res.status === "success") {
                console.log(res)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="bg-[#fefefe] p-8 w-full">
            <h1 className="text-4xl font-bold">Create Blog</h1>

            <form onSubmit={handleSubmit(onCreateBlog)} className="bg-[#frfrfr] px-6 py-12 border-[3px] border-[#ddd] rounded-lg mt-6" >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered max-w-3xl"
                        {...register("title", {
                            required: true,
                        })}
                    />
                    {errors.title && (
                        <p className="text-red-500">This field is required</p>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Author"
                        className="input input-bordered max-w-3xl"
                        value={userId}
                        readonly
                        disabled
                    />
                    {errors.author && (
                        <p className="text-red-500">This field is required</p>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tags</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Add comma to separate"
                        className="input input-bordered max-w-3xl"
                        {...register("tags", {
                            required: true,
                        })}
                    />
                    {errors.tags && (
                        <p className="text-red-500">This field is required</p>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Banner</span>
                    </label>
                    <input
                        type="url"
                        placeholder="Banner"
                        className="input input-bordered max-w-3xl"
                        {...register("image", {
                            required: true,                            
                        })}
                    />
                    {errors.image && (
                        <p className="text-red-500">This field is required</p>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Content</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="title"
                        className="textarea textarea-bordered max-w-3xl h-11"
                        {...register("content", {
                            required: true,
                        })}
                    />
                    {errors.content && (
                        <p className="text-red-500">This field is required</p>
                    )}
                </div>

                <button className="btn btn-primary mt-8 text-[#fff] px-10" type="submit">Create</button>
            </form>

        </div>
    );
};

export default CreateBlogComp;