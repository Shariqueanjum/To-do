import { Provider } from "react-redux";
import ToDoCard from "./components/ToDoCard";
import store from "./utils/store";


function App() {
  return (
    <Provider store={store}>
      <ToDoCard/>
    </Provider>
  );
}

export default App;
