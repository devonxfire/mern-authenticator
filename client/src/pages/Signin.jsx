import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setErrorDetails(data.message);
        setError(true);
        setLoading(false);
        return;
      }
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
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
      </form>
      <div className="mt-5 flex gap-2">
        <p>Don&#39;t have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-700 mt-5">`Error! ${errorDetails}`</p>}
    </div>
  );
}
