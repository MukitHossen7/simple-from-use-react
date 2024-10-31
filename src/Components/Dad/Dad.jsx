import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
  return (
    <div className="p-6 border border-yellow-400 rounded-xl">
      <h2 className="font-bold text-xl text-center">Dad</h2>
      <div className="flex gap-4">
        <MySelf></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Dad;
