import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="p-5 flex justify-between">
      <Image width={10} height={10} className="w-10 h-10" src="/images/jo.png" alt="" />

      <ul className="text-white flex group space-x-6">
        <Link legacyBehavior href="/post">
          Blog
          {/* <li className="text-gray-300 cursor-pointer"></li> */}
        </Link>
        <li>About</li>
        <li>Services</li>
      </ul>
    </div>
  );
}

export default Navbar;
