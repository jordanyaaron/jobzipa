"use client";

import dynamic from "next/dynamic";

import "quill/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  {
    ssr: false,
  }
);

interface TextEditorProps {
  value: string;

  onChange: (value: string) => void;
}

export default function TextEditor({
  value,
  onChange,
}: TextEditorProps) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],

      ["bold", "italic", "underline"],

      [{ list: "ordered" }, { list: "bullet" }],

      ["link"],

      ["clean"],
    ],
  };

  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border
        border-theme
        bg-card
      "
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="text-main"
      />
    </div>
  );
}