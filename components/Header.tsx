import Image from "next/image";
import * as Icons from "heroicons-react";

export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10 ">
      {/* Left- Logo*/}
      <div className="h-10 flex items-center relative cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="image"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle- Search Input field */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          name=""
          id=""
          placeholder="Start your Search"
        />
        <Icons.Search
          size={32}
          className="hidden md:inline-flex bg-red-400 text-white rounded-full p-2 md:mx-2 cursor-pointer"
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline text-gray-500 cursor-pointer">
          Become a host
        </p>
        <Icons.GlobeAlt className="text-gray-500 h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 ">
          <Icons.Menu className="text-gray-500 h-6" />
          <Icons.UserCircle className="text-gray-500 h-6" />
        </div>
      </div>
    </header>
  );
}
