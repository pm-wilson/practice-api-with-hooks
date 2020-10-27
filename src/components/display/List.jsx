import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({ characters }) => {
  return (
    <div>
      <h3>Character List</h3>
      {characters.map((character) => {
        return <Link className="character-name" to={`/details/${character._id}`} key={character._id}>{character.name}</Link>;
      })}
    </div>
  );
};

List.propTypes = {
  characters: PropTypes.array,
};

export default List;
