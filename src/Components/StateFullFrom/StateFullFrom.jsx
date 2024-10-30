import { useState } from "react";

const StateFullFrom = () => {
  const [name, setName] = useState("Mukit");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handleStateFrom = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Your password is less then 6");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <div className="w-11/12 mx-auto pt-10 border border-slate-200 rounded-xl p-5 mt-10">
        <h2 className="font-semibold text-2xl mb-5 text-center">
          This is State Controller From
        </h2>
        <form className="w-96 mx-auto" onSubmit={handleStateFrom}>
          <label>Enter Name: </label>
          <input
            onChange={handleChangeName}
            value={name}
            type="text"
            placeholder="Enter Name"
            name="name"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <br></br> <br></br>
          <label>Enter Email: </label>
          <input
            onChange={handleChangeEmail}
            type="email"
            placeholder="Enter Email"
            name="email"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <br></br> <br></br>
          <label>Enter Password: </label>
          <input
            onChange={handleChangePassword}
            type="password"
            placeholder="Enter Password"
            name="phone"
            required
            className="input input-bordered input-md w-full max-w-xs"
          />{" "}
          {error && (
            <p>
              <small className="text-red-500 font-semibold">{error}</small>
            </p>
          )}
          <br></br> <br></br>
          <button className="btn btn-outline btn-secondary text-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StateFullFrom;
