import CustomHookFrom from "./Components/CustomHookFrom/CustomHookFrom";
import CustomHookFrom2 from "./Components/CustomHookFrom2/CustomHookFrom2";

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
      <CustomHookFrom2></CustomHookFrom2>
      <Grandpa></Grandpa>
    </>
  );
}

export default App;
