import { ArrowRight } from "lucide-react";

interface Props {
  imageUrl: string;
  name: string;
  description: string;
  onClick: () => void;
}

export const Certificated = ({
  imageUrl,
  name,
  description,
  onClick,
}: Props) => {
  return (
    <li className="w-full md:w-[48%] xl:w-[32%] flex gap-6 bg-white rounded shadow p-4 h-[140px] overflow-y-auto border-2 hover:cursor-pointer transition-all hover:border-2 hover:border-[#fe7c21]">
      <img src={imageUrl} alt={name} />
      <div className="flex flex-col justify-between w-full">
        <div className="pr-8">
          <p className="font-semibold text-lg text-gray-500">{name}</p>
          <span className="text-base text-gray-500">{description}</span>
        </div>

        <button
          onClick={onClick}
          className="self-end text-gray-400 hover:text-gray-700 transition-all"
        >
          <ArrowRight />
        </button>
      </div>
    </li>
  );
};
