import axios from "axios";
import { useForm } from "react-hook-form"

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSignup = async (data) => {
        console.log(data)
        try{
            const res = await axios.post('http://localhost:5000/api/v1/user/signup', data)
            if (res.data.status === "success") {
                alert("success");
                window.location.href = "/blogs";
            }

        } catch (err) {
            console.log(err)
        }
        
    }
    return (
        <div>
            <div className="hero h-[80vh] bg-[#fefefe]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSignup)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    {...register("name", {
                                       required: true 
                                    })}
                                />
                                {errors.name && <span className="text-small text-red-500 pt-2 text-mulish">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    {...register("email", {
                                        required: true
                                    })}/>
                                {errors.email && <span className="text-small text-red-500 pt-2 text-mulish">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="phone number"
                                    className="input input-bordered" 
                                     {...register("phone", {
                                        required: true
                                    })} />
                                {errors.phone && <span className="text-small text-red-500 pt-2 text-mulish">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your image</span>
                                </label>
                                <input
                                    type="url"
                                    placeholder="your image"
                                    className="input input-bordered"
                                    {...register("profileImg", {
                                        required: true
                                    })}
                                />
                                {errors.profileImg && <span className="text-small text-red-500 pt-2 text-mulish">Profile image is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    {...register("password", {
                                    required: true
                                    })} />
                                {errors.password && <span className="text-small text-red-500 pt-2 text-mulish">Profile image is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;