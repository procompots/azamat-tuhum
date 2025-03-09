import "./App.css";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import HeaderBosh from "./components/header/header";
import Tableheader from "./components/tableHeader/table-header";
import Table from "./components/table/table";
function App() {
  return (
    <>
      <main>
        <div>
          <Sidebar />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "50px", borderRadius:"30px" }}
        >
          <HeaderBosh />
          <div className="sect">
            <Tableheader />
            <Table />
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
