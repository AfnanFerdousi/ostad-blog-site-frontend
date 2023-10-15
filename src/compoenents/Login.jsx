import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

const LoginComp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onLogin = async (data) => {
        console.log(data);
        try {
            const res = await axios.post("http://localhost:5000/api/v1/user/login", data); // Change the URL to your login API endpoint
            if (res.data.status === "success") {
                Cookies.set("token", res.data.data.accessToken);
                alert("Login successful");
                window.location.href = "/blogs";

            }
        } catch (err) {
            console.log(err);
            alert("Login failed");
        }
    };

    return (
        <div>
            <div className="hero h-[80vh] bg-[#fefefe]">
                <div className="hero-content flex-col  w-[80%]">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <p className="py-6">Please enter your email and password to log in.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onLogin)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-small text-red-500 pt-2 text-mulish">
                                        Email is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors.password && (
                                    <span className="text-small text-red-500 pt-2 text-mulish">
                                        Password is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComp;
