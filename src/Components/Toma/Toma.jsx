import { useContext } from "react";
import { AgeContext } from "../Grandpa/Grandpa";

const Toma = () => {
  const { ages, age, setAge } = useContext(AgeContext);
  return (
    <div className="border border-red-400 p-4 rounded-xl">
      <h2 className="font-bold">Toma</h2>
      <p>
        <small>Age : {ages}</small>
      </p>
      <p>
        <small>Updata Age : {age}</small>
      </p>
      <button onClick={() => setAge(ages + age)}>update age</button>
    </div>
  );
};

export default Toma;
