import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
      <i className="icon material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#tech-list" className="btn-floating green modal-trigger"></a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;