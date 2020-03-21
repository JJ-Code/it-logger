import React, { useState } from "react"
import M from "materialize-css/dist/js/materialize.min.js";

const TechListModal = ({ addLog }) => {
  const [techs, setTechs] = useState(" ");
  const [loading, setLoading] = useState(" ");


  useEffect(() => {
    getLogs();
  }, [])
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setLoading(false);

  }

  if (loading) {
    return <Preloader />;
  }
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center"> System Logs</h4> </li>

        {!loading && logs.length === 0 ? (<p className="center">No logs right now</p>) :
          logs.map(log => <LogItem log={log} key={log.id} />)}
      </ul>

    </div>
  )
}


export default TechListModal;
