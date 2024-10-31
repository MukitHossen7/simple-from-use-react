import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div className="p-6 border border-yellow-400 rounded-xl">
      <h2 className="font-bold text-xl text-center">Aunty</h2>
      <div className="flex gap-4">
        <Cousin></Cousin>
        <Cousin></Cousin>
      </div>
    </div>
  );
};

export default Aunty;
