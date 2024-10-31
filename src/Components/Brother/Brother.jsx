import { useContext } from "react";
import { MedicenContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const madacin = useContext(MedicenContext);
  return (
    <div className="border border-yellow-400 rounded-xl p-5">
      <h2 className="font-bold text-xl">Brother</h2>
      <p>
        <small>napa : {madacin.napa}</small>
      </p>
      <p>
        <small>paracitamol : {madacin.paracitamol}</small>
      </p>
      <p>
        <small>ppi : {madacin.ppi}</small>
      </p>
    </div>
  );
};

export default Brother;
