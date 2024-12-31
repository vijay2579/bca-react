import List from "./List";

export default function Table() {
  return (
    <>
      <table className="app-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orange</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <List />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
