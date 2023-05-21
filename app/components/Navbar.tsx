import Link from "next/link";
import React from "react";
import {FaYoutube, FaLaptop, FaGithub, FaFacebook} from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav
      className="
    bg-slate-600  p-4 sticky top-0 drop-shadow-xl z-10
    "
    >
      <div className="prose prose-xl mx-auto  flex justify-between flex-col sm:flex-row">
        <Link className="text-white/90 no-underline text-center hover:text-white" href={`/`}>
            Manish Tamang
      
        </Link>
        <div className="flex justify-center text-2xl sm:text-3xl align-middle gap-4  sm:justify-evenly">
        <Link target="_blank" className="text-white/90 hover:text-white" href={`https://www.facebook.com/profile.php?id=100031055010485`}>
         <FaFacebook />
        </Link>
        <Link target="_blank" className="text-white/90 hover:text-white" href={`https://github.com/Manish-456`}>
         <FaGithub />
        </Link>
        <Link target="_blank" className="text-white/90 hover:text-white" href={`https://www.youtube.com/`}>
         <FaYoutube />
        </Link>
        </div>
      </div>
    </nav>
  );
}
