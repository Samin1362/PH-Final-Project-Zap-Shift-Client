import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { data, Link } from "react-router";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const handleRegistration = (e) => {
    const profileImage = e.photo[0];

    registerUser(e.email, e.password)
      .then((result) => {
        // store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImage);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          console.log("After image upload", res.data.data.url);

          // update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated")
            })
            .catch((e) => console.log(e));
        });

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

          {/* photo input field  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo</span>
            </label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input w-full"
              placeholder="Your Photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
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
