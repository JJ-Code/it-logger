import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addLog }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');



  const onSubmit = () => {
    //console.log(message, tech, attention);

    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a fist and last name' });
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
      setFirstName('');
      setLastName('');
    }
  };


  return (
    <div id='tech-modal' className='modal' >
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='Last Name'
              value={lastName}
              className='browser-default'
              onChange={e => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technician
              </option>
              <option value='Sam'> Sam Smith
              </option>
              {/* <TechSelectOptions /> */}
            </select>
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


export default AddTechModal;
