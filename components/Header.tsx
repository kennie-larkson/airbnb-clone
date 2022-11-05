import Image from "next/image";
import * as Icons from "heroicons-react";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { isNumberObject } from "util/types";

export default function Header(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestsCount, setGuestsCount] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  console.log("guests", guestsCount);

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col mx-auto col-span-3 mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <Icons.Users className="h-5" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400 "
              value={guestsCount}
              onChange={(e) => setGuestsCount(+e.target.value)}
              type="number"
              min={1}
            />
          </div>

          <div className="flex">
            <button
              onClick={() => setSearchInput("")}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
