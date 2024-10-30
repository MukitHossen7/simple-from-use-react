const SimpleFrom = () => {
  const handleFrom = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };

  return (
    <div className="w-11/12 mx-auto pt-10 border border-slate-200 rounded-xl p-5 mt-10">
      <h2 className="font-semibold text-2xl mb-5 text-center">
        This is Simple From
      </h2>
      <form className="w-96 mx-auto" onSubmit={handleFrom}>
        <label>Enter Name: </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <br></br> <br></br>
        <label>Enter Email: </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <br></br> <br></br>
        <label>Enter Phone: </label>
        <input
          type="number"
          placeholder="Enter Number"
          name="phone"
          className="input input-bordered input-md w-full max-w-xs"
        />{" "}
        <br></br> <br></br>
        <button className="btn btn-outline btn-secondary text-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleFrom;
