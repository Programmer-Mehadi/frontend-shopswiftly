"use client"

import React from "react"
import { twMerge } from "tailwind-merge"

export default function InputField({
  className = "",
  placeholder = "",
  name = "",
  onChangeHandler = (e) => {},
  type = "text",
  value = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
      className={twMerge(
        "rounded text-base border border-Darkblack " + className
      )}
    />
  )
}
