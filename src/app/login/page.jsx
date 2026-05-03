"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const { data, error } = await authClient.signIn.email({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    if (error) {
      toast.error(error.message || "Login failed!");
    } else {
      toast.success("Login Successful!");
      setTimeout(() => router.push(redirect), 2000); // ← redirect
    }
    setLoading(false);
  };

  const onGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  const inp = "w-full h-10 pl-9 pr-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white text-sm placeholder-slate-500 outline-none focus:border-cyan-500 transition-all";

  return (
    <div className="min-h-[85vh] flex items-center justify-center mt-15 px-4">
      <div className="w-full max-w-sm bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-700/50">

        <h2 className="text-2xl font-black text-white uppercase tracking-tighter text-center">
          Login To Your <span className="text-cyan-400">Account</span>
        </h2>
        <p className="text-slate-400 text-xs text-center mb-5 mt-1">Welcome back to Tiles Gallery</p>

        <form onSubmit={onSubmit} className="flex flex-col gap-3">

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
            <input name="email" type="email" placeholder="Email Address" required className={inp} />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
            <input name="password" type="password" placeholder="Password" required className={inp} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 mt-1 rounded-lg bg-cyan-500 text-slate-900 font-black text-sm uppercase tracking-widest hover:bg-cyan-400 hover:-translate-y-0.5 active:scale-95 transition-all disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            type="button"
            onClick={onGoogleLogin}
            className="w-full h-10 rounded-lg bg-slate-700/60 text-white text-sm font-bold border border-slate-600 flex items-center justify-center gap-2 hover:bg-slate-700 hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <GrGoogle /> Login with Google
          </button>

          <p className="text-center text-slate-500 text-xs">
            Don't have an account?
            <a href="/register" className="text-cyan-400 ml-1 font-bold hover:underline">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
}