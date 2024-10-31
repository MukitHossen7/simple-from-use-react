import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  return (
    <div className="p-6 border border-yellow-400 rounded-xl">
      <h2 className="font-bold text-xl text-center">Uncle</h2>
      <div className="flex gap-3">
        <Cousin></Cousin>
        <Cousin></Cousin>
      </div>
    </div>
  );
};

export default Uncle;
