import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
