import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";

import { getCurrentLocale } from "@/locales/server";

import { cn } from "@/lib/utils";

const Footer = () => {
  const locale = getCurrentLocale();
  const iconSize = 35;

  return (
    <footer className="flex flex-col  items-center p-40 bg-gradient-to-b from-black via-slate-950 to-gray-900 gap-16">
      <div
        className={cn("flex h-9 gap-6", {
          "justify-start": locale === "en",
          "justify-end": locale === "he" || locale === "ar",
        })}
      >
        <Link
          href="https://www.facebook.com/profile.php?id=100094054136377"
          target="_blank"
        >
          <FacebookIcon size={iconSize} />
        </Link>
        <Link href="https://www.instagram.com/orwa.s.shams/" target="_blank">
          <InstagramIcon size={iconSize} />
        </Link>
        <Link href="https://twitter.com/orwa_dev" target="_blank">
          <TwitterIcon size={iconSize} />
        </Link>
        <Link href="https://www.linkedin.com/in/orwa-sh/" target="_blank">
          <LinkedinIcon size={iconSize} />
        </Link>
        <Link href="https://github.com/OrwaShams" target="_blank">
          <GithubIcon size={iconSize} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
