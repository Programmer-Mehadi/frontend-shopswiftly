import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Product Details - ShopSwiftly",
  description: "ShopSwiftly is an e-commerce store built with Next.js",
}
export default function PerPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
