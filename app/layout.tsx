import "@/app/global.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Metadata } from "next";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`flex h-screen flex-col bg-primary-dark text-white antialiased`}>
        <Header />
        <main className="flex flex-grow flex-row overflow-hidden">
          <Sidebar />
          <div className="w-full flex-1 overflow-y-auto p-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
