import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const [signInError, setSignInError] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSignInError(false);

      dispatch(signInStart());
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setSignInError(true);
        setErrorDetails(data.message);
        dispatch(signInFailure(data));

        return;
      }
      dispatch(signInSuccess(data));
      navigate("/profile");
    } catch (error) {
      setSignInError(true);
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto min-h-screen font-light">
      <h1 className="text-3xl text-center font-extralight my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 uppercase text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="mt-5 flex gap-2">
        <p>Don&#39;t have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      {/* <p className="text-red-700 mt-5">
        {error.success ? error.message || "Something went wrong!" : ""}
      </p> */}
      {error && <p className="text-red-700 mt-5">{errorDetails}</p>}
    </div>
  );
}
