import Cousin from "../Cousin/Cousin";
import Toma from "../Toma/Toma";

const Uncle = () => {
  return (
    <div className="p-6 border border-yellow-400 rounded-xl">
      <h2 className="font-bold text-xl text-center">Uncle</h2>
      <div className="flex gap-3">
        <Cousin></Cousin>
        <Cousin></Cousin>
        <Toma></Toma>
      </div>
    </div>
  );
};

export default Uncle;
