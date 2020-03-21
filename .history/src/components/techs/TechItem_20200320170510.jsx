import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>{tech.firstName} {tech.lastName}</div>
<a href="#!" className="secondard-content"></a>
i.material-icons.gre
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
}

export default TechItem;
