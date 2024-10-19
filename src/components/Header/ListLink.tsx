import React from "react";


interface linkProps extends React.HTMLAttributes<HTMLElement> {
  route?: string,
  children: React.ReactNode
}

export default function Link({ route, children }: linkProps) {
  return (
    <li className="glow-text">
      <a href={route}>
        {children}
      </a>
    </li>
  )
}