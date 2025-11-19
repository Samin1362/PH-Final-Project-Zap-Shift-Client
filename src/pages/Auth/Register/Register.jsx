import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useAuth();
  const handleRegistration = (e) => {
    registerUser(e.email, e.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <div className="card-body p-8">
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-base-content/70 mb-6">
          Join Zap Shift today
        </p>

        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
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
              {...register("password", { required: true, minLength: 6 })}
              className="input input-bordered w-full"
              placeholder="Create a password (min 6 characters)"
            />
            {errors.password?.type === "required" && (
              <label className="label">
                <span className="label-text-alt text-error">
                  Password is required
                </span>
              </label>
            )}
            {errors.password?.type === "minLength" && (
              <label className="label">
                <span className="label-text-alt text-error">
                  Password must be at least 6 characters
                </span>
              </label>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-6 text-black"
          >
            Create Account
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Login Link */}
        <p className="text-center text-base-content/70">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
