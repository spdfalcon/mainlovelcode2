import React, { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "bootstrap-icons/font/bootstrap-icons.min.css"
const yekanbakh = localFont({
  src: [
    {
      path: "./_fonts/fonts/woff/YekanBakh-Thin.woff",
      weight: "100",
    },
    {
      path: "./_fonts/fonts/woff/YekanBakh-Light.woff",
      weight: "300",
    },
    {
      path: "./_fonts/fonts/woff/YekanBakh-Regular.woff",
      weight: "400",
    },
    {
      path: "./_fonts/fonts/woff/YekanBakh-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./_fonts/fonts/woff/YekanBakh-Bold.woff",
      weight: "700",
    },
    {
      path: "./_fonts/fonts/woff/YekanBakh-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "./_fonts/fonts/woff/YekanBakh-Black.woff",
      weight: "900",
    },
  ],
  variable: "--font-yekanbakh",
  weight: "400",
});
const cinema = localFont({
  src: "./_fonts/fonts/Cinema.ttf",
  variable: "--font-cinema",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html dir="rtl">
      <body>
        <body
          className={`${cinema.variable} ${yekanbakh.variable} bg-background text-white font-yekanbakh`}
        >
          {children}
        </body>
      </body>
    </html>
  );
}
