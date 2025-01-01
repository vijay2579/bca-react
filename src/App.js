import Content from "./Components/Content";
import Header from "./Components/Header";
import Popup from "./Components/Popup";
import "./style/style.scss";
export function App() {
  let show = false;
  return (
    <div className="container">
      <Header />
      <Content />
      <Popup showPopup={show} />
      <button>Toggle popUp</button>
    </div>
  );
}
