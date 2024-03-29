import type { Metadata } from "next";
import '../../public/css/style.css'
import Header from "./header/header"


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <main>
          <Header/>
          {children}
        </main>
        </body>

    </html>
  )
}
