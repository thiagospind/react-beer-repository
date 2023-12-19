import { useEffect, useState } from "react";
import { getBeersAPI } from "../../../api/beerApi";
import { Beer } from "../../../interfaces/beer";
import { LuPlusSquare, LuPencil, LuTrash2 } from "react-icons/lu";
import { Modal } from "../../customComponents/modal";
import { CreateBeer } from "../createBeer";

export const BeerList: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]); // <Beer[]> é o tipo do array beers, que é um array de objetos do tipo Beer
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const beersData = await getBeersAPI();
        // console.log(beersData.data.data);
        setBeers(beersData.data);
        // console.log(beersData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCreateBeer = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl my-6">Lista de cervejas cadastradas</h1>
        <div className=" flex flex-row text-start mx-3 items-center gap-2">
          <button
            className="bg-yellow-200 rounded-md py-1 px-3"
            onClick={handleCreateBeer}
          >
            <LuPlusSquare size={32} />
          </button>
          {/* <span>Adicionar Cerveja</span> */}
        </div>
        <div className="flex flex-row items-start my-4 mt-3 mx-3 font-bold">
          <span className="w-[20%] ">Nome</span>
          <span className="w-[5%]">ABV</span>
          <span className="w-[20%]">Cor</span>
          <span className="w-[20%]">Cervejaria</span>
          <span className="w-[20%]">Estilo</span>
          {/* <span className="w-[5%]">Estilo</span>
        <span className="w-[5%]">Estilo</span> */}
        </div>
        {beers.length > 0 ? (
          beers.map((beer) => (
            <div
              className="flex flex-row justify-start items-start my-4 mt-3 mx-3 border border-solid rounded-md border-blue-300 py-2 bg-blue-50"
              key={beer.id}
            >
              <div className="w-[20%]">{beer.name}</div>
              <div className="w-[5%] ">{beer.abv}</div>
              <div className="w-[20%] ">{beer.color}</div>
              <div className="w-[20%] ">{beer.brewery}</div>
              <div className="w-[20%] ">{beer.style}</div>
              <div className="w-[5%] ">
                <button>
                  <LuPencil />
                </button>
              </div>
              <div className="w-[5%] ">
                <button>
                  <LuTrash2 />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-4">** Nenhuma cerveja encontrada! **</div>
        )}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <CreateBeer />
      </Modal>
    </>
  );
};
