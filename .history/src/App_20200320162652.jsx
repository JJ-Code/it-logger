import React, {useEffect, Fragment} from 'react';
import SearchBar from "./components/layout/SearchBar";
import AddBtn from "./components/layout/AddBtn";
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal"
import EditLogModal from "./components/logs/EditLogModal"
import AddTechModal from "./components/logs/EditLogModal"

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';


const App = ()=> {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
