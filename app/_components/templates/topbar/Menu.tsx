"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function Menu() {
  const navLinks = [
    { id: 1, title: "صفحه اصلی", href: "/" },
    { id: 2, title: "نمونه کارها", href: "/portfolio" },
    { id: 3, title: "تعرفه طراحی سایت", href: "/tariffs" },
    { id: 4, title: "مقالات", href: "/articles" },
    { id: 5, title: "درباره ما", href: "/aboutus" },
    { id: 6, title: "تماس با ما", href: "/contactus" },
  ];
  const pathname = usePathname();
  const mainPathName = pathname.split("/")[1];
  

  return (
    <div>
      <ul className="px-[27px] py-5 bg-background rounded-full text-sm flex gap-4 lg:gap-11">
        {navLinks.map((link) => (
          <li className="text-[10px] cursor-pointer lg:text-sm" key={link.id}>
            <Link
              className={
                `/${mainPathName}` === link.href
                  ? "gradient-orange text-transparent bg-clip-text before:size-[2px] before:gradient-orange before:block relative before:absolute before:-top-px before:-right-1 before:rounded-full "
                  : pathname === `${link.href}`
                  ? "gradient-orange text-transparent bg-clip-text before:size-[2px] before:gradient-orange before:block relative before:absolute before:-top-px before:-right-1 before:rounded-full "
                  : ""
              }
              href={`${link.href}`}
              key={link.id}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
