import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContaier from "./components/MainContaier";
import WatchPage from "./components/WatchPage";
function App() {
  const appRoute=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContaier/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRoute}/>

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
