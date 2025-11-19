import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const handleLogin = (e) => {
    signInUser(e.email, e.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || '/')
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <div className="card-body p-8">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-base-content/70 mb-6">
          Sign in to continue to Zap Shift
        </p>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
            {errors.email?.type === "required" && (
              <label className="label">
                <span className="label-text-alt text-error">
                  Email is required
                </span>
              </label>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
            {errors.password?.type === "required" && (
              <label className="label">
                <span className="label-text-alt text-error">
                  Password is required
                </span>
              </label>
            )}
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-primary"
              >
                Forgot password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-6 text-black"
          >
            Sign In
          </button>
        </form>

        <SocialLogin></SocialLogin>

        <div className="divider">OR</div>

        {/* Register Link */}
        <p className="text-center text-base-content/70">
          New to Zap Shift?{" "}
          <Link to="/register" className="link link-primary font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
