import { MainPanel } from "./mainPanel";
import { Sidebar } from "./sidebar";
import { TopBar } from "./topbar";

export const BeerApp = () => {
  return (
    <div className="h-full w-full bg-yellow-100">
      <TopBar />
      <div className="flex flex-row h-screen">
        <Sidebar />
        <MainPanel />
      </div>
    </div>
  );
};
