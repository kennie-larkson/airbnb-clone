import Image from "next/image";

interface Item {
  img: string;
  location: string;
  distance: string;
}

export default function SmallCard(item: Item): JSX.Element {
  const { img, location, distance } = item;
  return (
    <div className="flex items-center m-2 mt-5 space-x-2 rounded-xl cursor-pointer hover:bg-gray-100  hover:scale-105 transition transform duration-200 ease-out">
      {/* left side  */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg " />
      </div>

      {/* right side */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
