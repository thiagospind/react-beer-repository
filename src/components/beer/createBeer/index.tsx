import serialize from "form-serialize";
import { Beer } from "../../../interfaces/beer";
import { Input } from "../../customComponents/input";
import { Select } from "../../customComponents/select";
import { useEffect, useState } from "react";
import { getStylesAPI } from "../../../api/styleAPI";
import { Style } from "../../../interfaces/style";
import { Button } from "../../customComponents/button";

interface Props {
  closeModal: () => void;
}

export const CreateBeer: React.FC<Props> = ({ closeModal }) => {
  const [styles, setStyles] = useState<Style[]>([]);
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const eventTarget = event.target as HTMLFormElement;
    const data = serialize<Beer>(eventTarget, { empty: true, hash: true });
    validateFields(data);
    console.log(data);
  };

  const handleClose = () => {
    closeModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stylesData = await getStylesAPI();
        // console.log(beersData.data.data);
        console.log(stylesData.data.data);
        setStyles(stylesData.data.data);
        console.log(styles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const validateFields = (data: Beer) => {
    if (
      data.name === "" ||
      data.abv === "" ||
      data.color === "" ||
      data.brewery === "" ||
      data.style === ""
    ) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  };

  return (
    <div className="flex flex-col my-1">
      <span className="mb-4 font-bold text-xl">Cadastro de Cervejas</span>
      <form onSubmit={handleSubmit}>
        <div className="flex ">
          <Input
            name="name"
            type="text"
            placeholder="Informe o nome da cerveja"
            className="w-[65%]"
          />
          <Input
            name="abv"
            type="text"
            placeholder="Informe o ABV"
            className="w-[35%]"
          />
        </div>
        <div className="flex ">
          <Input
            name="color"
            type="text"
            placeholder="Informe a cor"
            className="w-[35%]"
          />
          <Input
            name="brewery"
            type="text"
            placeholder="Informe a cervejaria"
            className="w-[65%]"
          />
        </div>
        <div className="flex w-full">
          <Select
            name="style"
            options={styles.map((style) => ({
              label: style.name,
              value: style.id,
            }))}
            placeholder="Selecione o estilo..."
            className="w-full"
          />
        </div>
        <div className="flex flex-row justify-end">
          <Button
            type="submit"
            children="Salvar"
            className="px-4 py-2 mx-2 my-2 text-white bg-green-500 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          ></Button>
        </div>
      </form>
    </div>
  );
};
