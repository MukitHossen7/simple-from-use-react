import { useContext } from "react";
import { AssetsContext, LaptopContext } from "../Grandpa/Grandpa";

const Rafsan = () => {
  const { taka, doller, setDoller } = useContext(AssetsContext);
  const { name, price, color } = useContext(LaptopContext);
  return (
    <div>
      <p>Rafsan {taka}</p>
      <p>doller : {doller}</p>
      <div className="border border-slate-200 p-2 rounded-lg">
        <h3>{name}</h3>
        <p>{price}</p>
        <span>{color}</span>
      </div>
      <button onClick={() => setDoller(doller + taka)}>Add doller</button>
    </div>
  );
};

export default Rafsan;
