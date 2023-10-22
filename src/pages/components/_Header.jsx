"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/alamra.png";
import HamburgerMenu from "./_HamburgerMenu";

const Header = () => {
  return (
    <div className="min-h-max">
      <header className="p-6 bg-zinc-900">
        <nav className="container flex mx-auto justify-between items-center">
          <a href="/" className="mx-auto">
            <Image src={logo} alt={""} height={70} width={70} />
          </a>
          <HamburgerMenu />
        </nav>
      </header>
    </div>
  );
};

export default Header;
