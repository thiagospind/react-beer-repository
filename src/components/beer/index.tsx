import { useEffect, useState } from "react";
import { getBeersAPI } from "../../api/beerApi";
import { Beer } from "../../interfaces/beer";
import { FaEdit, FaTrash } from "react-icons/fa";

export const BeerList: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]); // <Beer[]> é o tipo do array beers, que é um array de objetos do tipo Beer

  useEffect(() => {
    const fetchData = async () => {
      try {
        const beersData = await getBeersAPI();
        // console.log(beersData.data.data);
        setBeers(beersData.data.data);
        console.log(beers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-xl mt-3">Lista de cervejas cadastradas</h1>
      {/* <div className="flex flex-col"> */}
      {beers.length <= 0
        ? null
        : beers.map((beer) => (
            <div
              className="flex flex-row justify-start items-start my-4 mt-3 mx-3 "
              key={beer.id}
            >
              <div className="w-[27%] border border-solid rounded-l-md border-blue-300 py-2 bg-blue-50">
                {beer.name}
              </div>
              <div className="w-[5%] border-y border-solid border-blue-300 py-2 bg-blue-50">
                {beer.abv}
              </div>
              <div className="w-[27%] border-y border-l border-solid border-blue-300 py-2 bg-blue-50">
                {beer.color}
              </div>
              <div className="w-[27%] border-y border-l border-solid border-blue-300 py-2 bg-blue-50">
                {beer.brewery}
              </div>
              <div className="w-[7%] border-y border-l border-solid border-blue-300 py-2 bg-blue-50">
                <button>
                  <FaEdit />
                </button>
              </div>
              <div className="w-[7%] border rounded-r-md border-solid border-blue-300 py-2 bg-blue-50">
                <button>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
      {/* </div> */}
    </div>
  );
};
