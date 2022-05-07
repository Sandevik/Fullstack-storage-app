import React, { useState } from "react";
import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Menu from "./Menu";
import Search from "./Search";
import Link from "next/link";

function Nav() {
  const [search, setSearch] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    setSearch("");
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between h-14 w-full p-2 bg-red-500 text-center items-center relative">
        <div>
          {/* Logo och eller namn */}
          <Link href="/"><div className="text-xl font-bold cursor-pointer ml-1 bg-white px-3 py-1 rounded-3xl items-center">Storage App</div></Link>
        </div>
        <div className="relative flex space-x-10 mr-4 w-80 items-center">
          {/* Search Area */}
          <div className="w-full">
            <SearchIcon className="w-4 h-4 absolute z-30 m-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="relative bg-slate-300 pl-7 rounded-lg h-8 focus:border-2 w-full items-center pb-0.5 focus:bg-zinc-50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="">
            <button className="mt-1" onClick={() => handleToggle()}>
              {!toggleMenu ? (
                <MenuIcon className="w-7 h-7 " />
              ) : (
                <XIcon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      {toggleMenu ? (
        <div className="absolute bg-slate-50 p-4 h-40 w-40 mt-14">
          {/* Meny */}
          <Menu />
        </div>
      ) : (
        ""
      )}
      {search.length > 0 ? (
        <div className=" ">
          <Search search={search} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Nav;
