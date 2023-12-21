import { Search as SearchIcon } from "lucide-react";

interface Props {
  filter: string;
  setFilter: (value: string) => void;
  handleAddCertificate: () => void;
}

export const Search = ({ filter, setFilter, handleAddCertificate }: Props) => {
  return (
    <div className="flex-col md:flex-row flex items-center gap-5">
      <div className="w-full md:w-[240px] h-10 bg-white px-3 flex items-center gap-2">
        <SearchIcon className="w-5 h-5 text-gray-500" />
        <input
          className="bg-transparent border-none outline-none w-full h-full"
          placeholder="pesquisar"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
      </div>
      <button
        onClick={handleAddCertificate}
        className="uppercase w-full md:w-[240px] h-10 bg-[#fe7c21] text-white font-semibold hover:opacity-80 transition-all"
      >
        Nova certificação
      </button>
    </div>
  );
};
