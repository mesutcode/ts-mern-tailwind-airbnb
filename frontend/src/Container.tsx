import React from 'react'
type ContanierProp = {
  children: React.ReactNode
}
export default function Container({ children }: ContanierProp) {
  return (
    <div
      className="
    max-w-[2520px]
    mx-auto
    xl:px-20 
    md:px-10
    sm:px-2
    px-4
  "
    >
      {children}
    </div>
  )
}
