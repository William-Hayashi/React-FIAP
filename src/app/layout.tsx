import type { Metadata } from "next";
import Header from "./Header/page";
import Footer from "./footer/page";
import '../app/css/style.css'

export const metadata: Metadata = {
  title: "Criando rotas no NEXT",
  description: "Aula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      
      <body>
      <Header/>
      
      {children}

      <Footer/>
      </body>

      
    </html>
  );
}
