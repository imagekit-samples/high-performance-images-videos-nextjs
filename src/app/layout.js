import "./globals.css";

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: "swap"
})
export const metadata = {
  title: "High-performance images and videos",
  description: "Using ImageKit's real-time optimizations and transformations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
