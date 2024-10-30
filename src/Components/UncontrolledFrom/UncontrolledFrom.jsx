import { useEffect, useRef } from "react";

const UncontrolledFrom = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleUncontrolledFrom = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <div className="w-11/12 mx-auto pt-10 border border-slate-200 rounded-xl p-5 mt-10">
        <h2 className="font-semibold text-2xl mb-5 text-center">
          This is Uncontrolled From
        </h2>
        <form className="w-96 mx-auto " onSubmit={handleUncontrolledFrom}>
          <label>Enter Name: </label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            name="name"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <br></br> <br></br>
          <label>Enter Email: </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            name="email"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <br></br> <br></br>
          <label>Enter Password: </label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter Password"
            name="phone"
            required
            className="input input-bordered input-md w-full max-w-xs"
          />{" "}
          <br></br> <br></br>
          <button className="btn btn-outline btn-secondary text-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UncontrolledFrom;
