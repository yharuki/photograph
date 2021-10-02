// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import Slideshow from "./components/pages/Slideshow";
import images from "./utils/images.json";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/photograph/products" component={ProductPage} exact />
        <Route path="/photograph" component={HomePage} exact />
        <Route path="/photograph/about" render={ () => <Slideshow sec={5000} images={images.url_list} /> }/>
      </Switch>
    </Router>
  );
};

    // <div className="App">
    //   <Slideshow sec={5000} images={images.url_list} />
    // </div>
export default App;