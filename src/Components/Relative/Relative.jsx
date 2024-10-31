import { useContext } from "react";
import { AssetsContext } from "../Grandpa/Grandpa";

const Relative = () => {
  const { name, taka, menay, setMenay } = useContext(AssetsContext);
  return (
    <div>
      <h2>Relative</h2>
      <p>gift : {name}</p>
      <p>taka : {taka}</p>
      <p>{menay}</p>
      <button onClick={() => setMenay(taka + menay)}>add taka</button>
    </div>
  );
};

export default Relative;
