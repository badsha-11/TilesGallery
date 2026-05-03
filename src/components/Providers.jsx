"use client";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";

export default function Providers({ children }) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      {children}
    </HeroUIProvider>
  );
}