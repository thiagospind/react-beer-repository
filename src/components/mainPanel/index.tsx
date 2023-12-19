interface Props {
  children: React.ReactNode;
}

export const MainPanel: React.FC<Props> = ({ children }) => {
  return (
    <div className="rounded-xl bg-slate-50 w-[80%] h-[80%] text-center">
      {children}
    </div>
  );
};
