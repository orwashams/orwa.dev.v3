import { cn } from "@/lib/utils";
import { getCurrentLocale } from "@/locales/server";
import Link from "next/link";
import React from "react";

const LocaleSelect = () => {
  const locale = getCurrentLocale();
  return (
    <div className="flex justify-center gap-4 ">
      <div className="flex ">
        <Link href={"/he"} className="bg-[#131619] p-5 font-hebrew">
          🇮🇱 עברית
        </Link>
      </div>
      <div className="flex">
        <Link href={"/en"} className="bg-[#131619] p-5 font-english font-bold">
          English 🇺🇸
        </Link>
      </div>
      <div className="flex">
        <Link href={"/ar"} className="bg-[#131619] p-5 font-arabic">
          🇸🇦 عربي
        </Link>
      </div>
    </div>
  );
};

export default LocaleSelect;
