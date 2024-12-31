import List from "./Components/List";
import Table from "./Components/Table";
import "./style/style.scss";

export function App() {
  return (
    <div className="container">
      <h1> My App </h1>
      <Table />
      <List />
    </div>
  );
}
