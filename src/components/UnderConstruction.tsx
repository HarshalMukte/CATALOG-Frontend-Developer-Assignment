import Image from "next/image";
import underConstruction from "../../public/under-construction.gif"

export default function UnderConstruction({ title }: { title: string }) {
    return (
      <div className="flex items-center justify-center flex-col gap-4 min-h-[50vh] bg-white rounded-xl">
        <Image src={underConstruction} alt="icon" width={200} height={200}/>
        <h1 className="text-gray-600 text-center text-xl font-semibold">
          <span className="font-bold text-primary">{title} </span> is under construction 🚧
        </h1>
      </div>
    );
  }
  