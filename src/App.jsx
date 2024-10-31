import CustomHookFrom from "./Components/CustomHookFrom/CustomHookFrom";
import Grandpa from "./Components/Grandpa/Grandpa";
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
      <Grandpa></Grandpa>
    </>
  );
}

export default App;
