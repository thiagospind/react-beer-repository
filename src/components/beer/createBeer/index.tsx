import serialize from "form-serialize";
import { Beer } from "../../../interfaces/beer";
import { Input } from "../../customComponents/input";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  beer: Beer;
}

export const CreateBeer: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const eventTarget = event.target as HTMLFormElement;
    const data = serialize<Beer>(eventTarget, { empty: true, hash: true });
    console.log(data);
  };

  const handleClose = () => {
    console.log("close");
  };

  return (
    <div className="flex flex-col my-4">
      <div className="flex justify-end">
        <button onClick={handleClose}>
          <IoCloseSharp size={20} />
        </button>
      </div>
      <span className="mb-3 font-bold text-xl">Cadastro de Cervejas</span>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-3 mb-2">
          <Input type="text" placeholder="Nome da cerveja" />
          <Input type="text" placeholder="Informe o ABV" />
        </div>
        <div className="flex flex-row gap-3">
          <Input type="text" placeholder="Informe a cor" />
          <Input type="text" placeholder="Informe a cervejaria" />
        </div>
      </form>
    </div>
  );
};
