import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Alert from "./Components/Alert";
import { BellRing } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Alert
        type={"alert-wrapper"}
        title="Something went wrong"
        icon={<BellRing size={20} />}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        maxime ipsa explicabo magni, nobis vitae minus eligendi voluptate natus
        illo?"
      />
    </>
  );
}

export default App;
