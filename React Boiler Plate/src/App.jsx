import ReactDOM from "react-dom";
import HelloWorld from "./components/helloworld";

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
