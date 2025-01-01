export default function Table(props) {
  let { data } = props;

  function fnClicked(result) {
    console.log(result);
  }
  return (
    <>
      <table className="app-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Value</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((childObj, i) => {
            if (childObj.display) {
              return (
                <tr>
                  <td>{childObj.name}</td>
                  <td>{childObj.value}</td>
                  <td>
                    <button onClick={() => fnClicked(childObj)}>
                      {childObj.buttonValue}
                    </button>
                  </td>
                </tr>
              );
            }
            return;
          })}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
