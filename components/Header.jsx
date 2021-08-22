import React from "react";
import Image from "next/image";
import logo from "../assets/hulu-white.png";
import { HeaderItem } from "./HeaderItem";
import {
  HomeIcon,
  UserIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
} from "@heroicons/react/outline";
export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between h-auto items-center">
      <div className="flex justify-evenly flex-grow max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        width={200}
        height={200}
        src={logo}
        className="object-contain"
        alt="this is the logo photo"
      />
    </header>
  );
};
