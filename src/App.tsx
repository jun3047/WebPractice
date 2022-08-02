import { Provider } from "react-redux";
import { createStore } from "redux";
import Btn from "./component/Btn";
import Dialog from "./component/Dialog";
import reducer from "./store";



function App() {
  const store = createStore(reducer);
  return (
    <div>
      <Provider store={store}>
        <Btn></Btn>
        <Dialog></Dialog>
      </Provider>
    </div>
  );
}

export default App;

