import Image from "next/image";

interface Item {
  img: string;
  title: string;
}

export default function MediumCard({ img, title }: Item) {
  return (
    //className="flex flex-col items-center m-2 mt-5  hover:scale-105 transition transform duration-200 ease-out"

    <div className="cursor-pointer hover:scale-105 transform transition  duration-300 ease-out">
      <div className="relative h-80 w-80 ">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
