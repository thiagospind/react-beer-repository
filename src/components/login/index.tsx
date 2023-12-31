import serialize from "form-serialize";
import { FormEvent, useState } from "react";
import { User } from "../../interfaces/user";
import { login } from "../../api/loginApi";
import { saveToken } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { Input } from "../customComponents/input";
import { Button } from "../customComponents/button";

export const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const eventTarget = event.target as HTMLFormElement;
    const data = serialize<User>(eventTarget, { empty: true, hash: true });

    const response = await login(data);
    console.log(response.data);
    if (response.data) {
      saveToken(JSON.stringify(response.data.value));
      setErrorMessage("");
      navigate("/cervejas");
    } else if (response.error) {
      console.log(response.error.status);
      response.status === 401
        ? setErrorMessage("Usuário ou senha inválidos")
        : setErrorMessage("Erro ao realizar login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto my-auto flex flex-col gap-8 rounded-2xl bg-slate-100 w-[500px] h-[400px] items-center justify-center mt-7 shadow-md">
        <h1 className="text-4xl">Repositório de Cervejas</h1>
        <h1 className="text-2xl">Login</h1>
        <div className="flex flex-col gap-4 w-80">
          <Input type="email" placeholder="Informe o email" name="email" />
          <Input
            type="password"
            placeholder="Informe a senha"
            name="password"
          />

          <Button className="bg-yellow-500 rounded-md p-2" type="submit">
            Login
          </Button>
          <span
            className="error-message text-red-500 text-sm"
            {...(errorMessage === "" ? { hidden: true } : {})}
          >
            {errorMessage}
          </span>
        </div>
      </div>
    </form>
  );
};
