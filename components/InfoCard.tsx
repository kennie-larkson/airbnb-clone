import Image from "next/image";
import * as Icons from "heroicons-react";

interface Details {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export default function InfoCard({
  img,
  location,
  title,
  description,
  price,
  star,
  total,
  long,
  lat,
}: Details) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t ">
      <div className=" relative   h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className=" rounded-2xl"
          priority
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <Icons.Heart className="h-7 cursor-pointer " />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className=" border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <Icons.Star className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className=" text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
