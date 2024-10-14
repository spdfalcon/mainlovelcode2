import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function HamberMenu({ setIsShow }: any) {
  const navLinks = [
    { id: 1, title: "صفحه اصلی", href: "/" },
    { id: 2, title: "نمونه کارها", href: "/portfolio" },
    { id: 3, title: "نمونه طراحی سایت", href: "/tariffs" },
    { id: 4, title: "مقالات", href: "/articles" },
    { id: 5, title: "درباره ما", href: "/aboutus" },
    { id: 6, title: "تماس با ما", href: "/contactus" },
  ];
  const pathname = usePathname();

  return (
    <div className="px-8 py-12 bg-black w-full h-screen">
      <div className="flex justify-between w-full">
        <Image
          alt=""
          src={"/footer/icon.png"}
          width={65.52}
          height={43.71}
        ></Image>
        <span
          onClick={() => setIsShow((priv: any) => !priv)}
          className="bi bi-x cursor-pointer text-lg p-3"
        >x</span>
      </div>
      <div>
        <ul className="flex flex-col gap-9 mt-12 text-sm">
          {navLinks.map((link) => (
            <li className="cursor-pointer" key={link.id}>
              <Link
                onClick={() => setIsShow((priv: any) => !priv)}
                className={
                  pathname === `/${link.href}`
                    ? "gradient-orange text-transparent bg-clip-text before:size-[2px] before:gradient-orange before:block relative before:absolute before:-top-px before:-right-1 before:rounded-full "
                    : pathname === `${link.href}`
                    ? "gradient-orange text-transparent bg-clip-text before:size-[2px] before:gradient-orange before:block relative before:absolute before:-top-px before:-right-1 before:rounded-full "
                    : ""
                }
                href={`${link.href}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
