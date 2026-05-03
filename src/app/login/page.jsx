import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <LoginClient />
    </Suspense>
  );
}