import useFromHook from "../Hooks/inputCustomHook2";

const CustomHookFrom2 = () => {
  const nameValue = useFromHook("Mukit");
  const emailValue = useFromHook();
  const passwordValue = useFromHook();
  const handleFrom = (e) => {
    e.preventDefault();
    console.log(nameValue.value);
    console.log(emailValue.value);
    console.log(passwordValue.value);
  };
  return (
    <div>
      <div className="w-11/12 mx-auto pt-10 border border-slate-200 rounded-xl p-5 mt-10">
        <h2 className="font-semibold text-2xl mb-5 text-center">
          This is Custom Hook From 2
        </h2>
        <form className="w-96 mx-auto" onSubmit={handleFrom}>
          <label>Enter Name: </label>
          <input
            {...nameValue}
            type="text"
            placeholder="Enter Name"
            name="name"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <br></br> <br></br>
          <label>Enter Email: </label>
          <input
            {...emailValue}
            type="email"
            placeholder="Enter Email"
            name="email"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <br></br> <br></br>
          <label>Enter Password: </label>
          <input
            {...passwordValue}
            type="password"
            placeholder="Enter Password"
            name="password"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <br></br> <br></br>
          <button className="btn btn-outline btn-secondary text-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomHookFrom2;