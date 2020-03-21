import React, {useEffect, Fragment} from 'react';
import Searc from "module";

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';


const App = ()=> {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      my app
    </div>
  );
}

export default App;
