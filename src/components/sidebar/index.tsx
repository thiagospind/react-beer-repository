export const Sidebar: React.FC = () => {
  return (
    <div className="w-72 mx-2 rounded-xl bg-slate-50 h-[80%] text-center">
      <div className="flex flex-col gap-3 mx-4">
        <h1 className="mt-5 text-xl">Menu</h1>
        <button className="rounded-lg bg-red-600  p-2 text-white">
          Cervejas
        </button>
        <button className="rounded-lg bg-red-600  p-2 text-white">
          Estilos
        </button>
        {/* <button className="bg-lime-400 rounded-lg">Meu Botão</button> */}
      </div>
    </div>
  );
};
