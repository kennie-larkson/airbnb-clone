import Image from "next/image";

interface LargeCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function LargeCard({
  img,
  title,
  description,
  buttonText,
}: LargeCardProps) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="">{description}</p>
        <button className=" text-sm bg-gray-900 text-white px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
