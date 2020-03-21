import React, { useState, useEffect } from "react"
import M from "materialize-css/dist/js/materialize.min.js";

const TechListModal = ({ addLog }) => {
  const [techs, setTechs] = useState(" ");
  const [loading, setLoading] = useState(" ");


  useEffect(() => {
    getTechs();
  }, [])
  
  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    setTechs(data);
    setLoading(false);

  }

  if (loading) {
    return <Preloader />;
  }
  return (
<div id="tech-list-modal" className="modal">
  <div className="modal-content">
    <h4>Techician List</h4>
    ul
  </div>
</div>


  )
}


export default TechListModal;
