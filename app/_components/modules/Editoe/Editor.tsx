"use client";
import React, { useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const EditorComponent: React.FC = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // استفاده از useMemo برای بهینه کردن config
  const config = useMemo(
    () => ({
      readonly: false,
      direction: "rtl",
      language: "fa",
      toolbarSticky: false,
      toolbarAdaptive: true,
      height: 500, // ارتفاع ویرایشگر
    }),
    []
  );

  // تابع onChange رو فقط زمانی فراخوانی کن که محتوای جدید تغییر کنه
  const handleChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={useMemo(
          () => ({
            readonly: false,
            direction: "rtl",
            language: "fa",
            toolbarSticky: false,
            toolbarAdaptive: true,
            height: 500, // ارتفاع ویرایشگر
          }),
          []
        )}
        onChange={handleChange}
      />
    </div>
  );
};

export default EditorComponent;
