import React from 'react'

export const SearchBar = () => {
  return (
    <nav style={{marginBottom: '30px'}} cName="blue">
      <div c="nav-wrapper">
        <form>
          <div c="input-field">
            <input id="search" type="search" />
              <label c="label-icon" for="search"><i c="material-icons">search</i></label>
              <i c="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}


export default SearchBar; 