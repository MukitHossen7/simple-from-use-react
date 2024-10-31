import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetsContext = createContext();
export const LaptopContext = createContext();

const Grandpa = () => {
  const product = {
    name: "laptop",
    price: 52000,
    color: "silver",
  };
  const [menay, setMenay] = useState(0);
  const [doller, setDoller] = useState(100);
  return (
    <div className="w-11/12 mx-auto p-6 border border-yellow-400 rounded-xl mt-10">
      <h2 className="font-bold text-xl text-center">Grandpa</h2>
      <div className="border border-yellow-400 rounded-xl p-5 flex justify-between gap-5">
        <LaptopContext.Provider value={product}>
          <AssetsContext.Provider
            value={{
              name: "gold",
              taka: 20,
              menay,
              setMenay,
              doller,
              setDoller,
            }}
          >
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </AssetsContext.Provider>
        </LaptopContext.Provider>
      </div>
    </div>
  );
};

export default Grandpa;
