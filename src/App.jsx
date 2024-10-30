import CustomHookFrom from "./Components/CustomHookFrom/CustomHookFrom";
import SimpleFrom from "./Components/SimpleFrom/SimpleFrom";
import StateFullFrom from "./Components/StateFullFrom/StateFullFrom";
import UncontrolledFrom from "./Components/UncontrolledFrom/UncontrolledFrom";

function App() {
  return (
    <>
      <SimpleFrom></SimpleFrom>
      <StateFullFrom></StateFullFrom>
      <UncontrolledFrom></UncontrolledFrom>
      <CustomHookFrom></CustomHookFrom>
    </>
  );
}

export default App;
