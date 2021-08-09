import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="content">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content-for-touka">
        <Header />
        <div className="main">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
