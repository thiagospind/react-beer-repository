import { BeerList } from "./beer/listBeer";
import { MainPanel } from "./mainPanel";
import { Sidebar } from "./sidebar";
import { TopBar } from "./topbar";

export const BeerApp = () => {
  return (
    <div className="flex flex-col bg-yellow-100 h-screen">
      <TopBar />
      <div className="flex flex-row">
        <Sidebar />
        <MainPanel>
          <BeerList />
        </MainPanel>
      </div>
    </div>
  );
};
