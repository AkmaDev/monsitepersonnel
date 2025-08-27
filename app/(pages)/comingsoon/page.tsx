"use client";
import ComingSoon from "@/components/ComingSoon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <ComingSoon />
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          onClick={() => router.back()} // redirige vers la page d’accueil
          className="hover:bg-background "
        >
          ← Retour
        </Button>
      </div>
    </div>
  );
};

export default Page;
