export default function Popup(props) {
  let { showPopup } = props;
  if (showPopup) {
    return (
      <div className="popup">
        <h1>This is Popup</h1>
        <button>Close</button>
      </div>
    );
  }
  return;
}
