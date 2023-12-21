import { useState } from "react";
import { Certificated } from "./components/Certificated";
import LogoCertificated from "./assets/logo-certifik.png";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { showToasty } from "./utils/showToasty";
import { aleatoryId } from "./utils/aleatoryId";

const defaultValue = {
  id: aleatoryId(2),
  name: `Nome da certificação`,
  description: `CertifikEDU`,
  imageUrl: LogoCertificated,
};

function App() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([
    {
      ...defaultValue,
      name: `${defaultValue.name} ${aleatoryId(10)}`,
      description: `${defaultValue.description} ${aleatoryId(10)}`,
    },
  ]);

  const handleRemoveCertificate = (id: string) => {
    setData((prevState) => prevState.filter((state) => state.id !== id));
    showToasty("Certificado removido com sucesso !", "success");
  };

  const handleAddCertificate = () => {
    setData((prevState) => [
      ...prevState,
      {
        ...defaultValue,
        id: aleatoryId(2),
        name: `${defaultValue.name} ${aleatoryId(10)}`,
        description: `${defaultValue.description} ${aleatoryId(10)}`,
      },
    ]);

    showToasty("Certificado adicionado com sucesso !", "success");
  };

  const filteredData = filter
    ? data.filter(
        (d) => d.name.includes(filter) || d.description.includes(filter)
      )
    : data;

  return (
    <div className="w-full min-h-screen bg-[#F8F9FB] pb-20">
      <Navbar />

      <div className="flex-col md:flex-row gap-5 max-w-screen-xl mx-auto p-4 pt-20 flex justify-between">
        <p className="text-3xl font-semibold">Minha carteira</p>

        <Search
          filter={filter}
          handleAddCertificate={handleAddCertificate}
          setFilter={setFilter}
        />
      </div>

      <ul className="p-4 flex-col md:flex-row max-w-screen-xl flex flex-wrap items-center gap-2 gap-y-4 mx-auto mt-10 ">
        {filteredData.map((value) => {
          return (
            <Certificated
              key={value.id}
              name={value.name}
              description={value.description}
              imageUrl={value.imageUrl}
              onClick={() => handleRemoveCertificate(value.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
