import React from 'react'

export const SearchBar = () => {
  return (
    <nav style={{marginBottom: '30px'}} classnName="blue">
      <div classn="nav-wrapper">
        <form>
          <div classn="input-field">
            <input id="search" type="search" />
              <label classn="label-icon" for="search"><i classn="material-icons">search</i></label>
              <i classn="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}


export default SearchBar; 