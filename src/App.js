import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />

        {/**
       * Head
      *Body
        * sidebar
          *  MenuItems
        *maincontainer
           * Buttonlist
          * Videocontainer
           * videocard

       *
       *
       *
       *
       *
       *
       *
       */}
      </div>
    </Provider>
  );
}

export default App;
