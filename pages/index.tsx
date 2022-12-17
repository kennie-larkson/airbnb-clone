import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import Link from "next/link";
import * as Icons from "heroicons-react";

interface Data {
  img: string;
  location: string;
  distance: string;
}
interface CardData {
  img: string;
  title: string;
}
interface ServerProps {
  data?: Data[];
  cardJson?: CardData[];
}

export default function Home({ data, cardJson }: ServerProps) {
  return (
    <div className="">
      <Head>
        <title>Kehinde Lawal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder={""} />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints (using server side rendering SSR) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((item) => (
              <SmallCard key={data.indexOf(item)} {...item} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {/* className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4" */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardJson?.map((item) => (
              <MediumCard key={cardJson.indexOf(item)} {...item} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Server Side Rendering for data that changes

export async function getStaticProps() {
  try {
    const res = await fetch(
      //"http://localhost:7777/api/travels"
      "https://weblog-kdc6.onrender.com/airbnb/listings"
    );

    const data = await res.json();

    const cardsData = await fetch(
      //"http://localhost:7777/api/cards-data"
      "https://weblog-kdc6.onrender.com/airbnb/travel/details"
    );
    const cardJson = await cardsData.json();

    return {
      props: { data, cardJson },
    };
  } catch (error) {
    console.log(error);
  }
}
