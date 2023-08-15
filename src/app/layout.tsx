import './globals.css'
import { Roboto } from 'next/font/google'
import {ReactNode} from "react";

const roboto = Roboto({
  weight: ['400', '700', '500'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
