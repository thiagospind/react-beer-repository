import serialize from "form-serialize";
import { FormEvent, useState } from "react";
import { User } from "../../interfaces/user";
import { login } from "../../api/loginApi";
import { saveToken } from "../../services/auth";
import { useNavigate } from "react-router-dom";

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
      <div className="mx-auto my-auto flex flex-col gap-8 rounded-2xl bg-slate-100 w-[500px] h-[350px] items-center justify-center mt-7 shadow-md">
        <h1 className="text-4xl">Repositório de Cervejas</h1>
        <div className="flex flex-col gap-5 w-80">
          <input
            type="email"
            placeholder="Informe o email"
            className="rounded-md p-3"
            name="email"
          />
          <input
            type="password"
            placeholder="Informe a senha"
            className="rounded-md p-3"
            name="password"
          />

          <button className="bg-yellow-500 rounded-md p-3" type="submit">
            Login
          </button>
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