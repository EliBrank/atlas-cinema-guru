import "@/app/global.css";
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
      <body className={`h-100  bg-primary-dark text-white antialiased`}>
        <header className="flex h-16 items-center bg-accent">
          <div className="wrapper px-8">
            <h1 className="font-bold">Cinema Guru</h1>
          </div>
        </header>
        <div className="sidebar">
          <nav>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
