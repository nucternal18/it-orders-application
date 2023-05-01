import Footer from "./components/Footer";
import Header from "./components/Header";
import NextAuthProvider from "./global-state/next-auth-provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IT Orders Application",
  description: "A simple application to manage IT orders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-full flex-col bg-stone-50`}>
        <NextAuthProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
