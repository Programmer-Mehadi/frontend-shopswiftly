import React from "react"
import { twMerge } from "tailwind-merge"

export default function ClickButton({ title = "", className = "" }) {
  return (
    <button
      className={twMerge(
        "px-5 bg-BrightBlue text-white py-2 rounded-[50px] " + className
      )}
    >
      {title}
    </button>
  )
}
