//import React from "react";
import Header from "./../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import { format } from "date-fns";
import MapComponent from "../components/Map";
import { ISearchDetails, ISearchServerProps } from "./../interfaces";
// interface Details {
//   img: string;
//   location: string;
//   title: string;
//   description: string;
//   star: number;
//   price: string;
//   total: string;
//   long: number;
//   lat: number;
// }
// interface ISearchServerProps {
//   searchResults: ISearchDetails[];
// }

function Search({
  searchResults,
}: ISearchServerProps): JSX.Element | JSX.Element[] {
  const router = useRouter();
  const {
    query: { location, endDate, startDate, guestsCount },
  } = router;

  const formattedStartDate = startDate?.toLocaleString().split("T")[0];

  const formattedEndDate = endDate?.toString().split("T")[0];
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guestsCount}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className=" text-xs">
            300+ stays. {range} for {guestsCount} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap ">
            <p className=" button ">Cancellation Flexibilty</p>
            <p className="button ">Type of Place</p>
            <p className="button ">Price</p>
            <p className="button ">Rooms and Beds</p>
            <p className="button ">More filters</p>
          </div>
          <div className="">
            {searchResults.map((result) => {
              return <InfoCard key={result.img} {...result} />;
            })}
          </div>
        </section>
        <section className=" hidden xl:inline-flex xl:min-w-[600]">
          <MapComponent searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  try {
    const searchResults = await fetch(
      "http://localhost:7777/api/travels/details"
    ).then((res) => res.json());

    return {
      props: { searchResults },
    };
  } catch (error) {
    console.log(error);
  }
}
