import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Manish Tamang",
  description: "Created by Manish Tamang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   
      <body className={`${poppins.className} dark:bg-slate-800`}>
      <Navbar />
      <MyProfilePic />
        {children}</body>
    </html>
  );
}
