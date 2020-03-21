import React, { useState } from "react"
import M from "materialize-css/dist/js/materialize.min.js";

const TechListModal = ({ addLog }) => {
  const [techs, setLogs] = useState(" ");
  const [loading, setLoading] = useState(" ");

  const onSubmit = () => {
    //console.log(message, tech, attention);

    if (firstName === " || lastName === ") {
      M.toast({ html: "Please enter a fist and last name" });
    } else {
      console.log(firstName, lastName);
      // const newLog = {
      //   message,
      //   attention,
      //   tech,
      //   date: new Date()
      //};

    //   addLog(newLog);

    //   M.toast({ html: `Log added by ${tech}` });

      // Clear Fields
      setFirstName(" ");
      setLastName(" ");
    }
  };


  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};


export default TechListModal;
