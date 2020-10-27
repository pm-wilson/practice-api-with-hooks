import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ details }) => {
  return (
    <div>Detail Screen
      <h3>{details.name}</h3>
      <img src={details.photoUrl}/>
      <p>Eye Color: {details.eye}</p>
      <p>Hair Color: {details.hair}</p>
      {details.weapon && <p>Ability: {details.weapon}</p>}
    </div>
  );
};

Detail.propTypes = {
  details: PropTypes.object,
};

export default Detail;
