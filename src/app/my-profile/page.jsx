"use client";

import { authClient } from "@/lib/auth-client";
import { FaEnvelope, FaUserShield, FaIdBadge } from "react-icons/fa";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  // safer loading handling (avoid hydration issue)
  if (isPending || !session) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 bg-transparent">
        <div className="w-full max-w-md bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 space-y-5 border border-slate-700/50">
          <div className="w-24 h-24 rounded-full bg-slate-700 animate-pulse mx-auto" />
          <div className="space-y-3">
            <div className="h-6 w-3/4 mx-auto rounded-lg bg-slate-700 animate-pulse" />
            <div className="h-4 w-1/2 mx-auto rounded-lg bg-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center mt-15 px-4 py-10">
      <div className="max-w-md w-full bg-slate-800/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-slate-700/50 relative overflow-hidden">

        {/* background glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Avatar */}
        <div className="flex flex-col items-center gap-4 relative">
          <div className="p-1 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/20">
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-slate-900"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center text-3xl font-black text-white border-2 border-slate-900">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div className="text-center mt-2">
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">
              {user?.name || "Guest User"}
            </h2>

            <div className="flex items-center justify-center gap-2 mt-1 text-cyan-400 font-medium">
              <FaUserShield className="text-sm" />
              <span className="text-xs uppercase tracking-widest">
                Verified Member
              </span>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="my-6 h-px bg-slate-700/50 w-full" />

        {/* info */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <FaEnvelope className="text-cyan-400" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Email Address
              </p>
              <p className="text-slate-200 font-medium">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <FaIdBadge className="text-purple-400" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Account Status
              </p>
              <p className="text-slate-200 font-medium">
                Active Premium Account
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-center text-slate-500 text-[10px] uppercase tracking-[0.2em]">
            Tiles Gallery Identity Card
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;