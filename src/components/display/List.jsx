import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter } from 'react-router-dom';

const List = ({ characters }) => {
  return (
    <div>
      <h3>Character List</h3>
      {characters.map((character) => {
        return (
          <div key={character._id}>
            <BrowserRouter><Link className="character-name" to={`/details/${character._id}`}>{character.name}</Link></BrowserRouter>
            <br />
          </div>
        );
      })}
    </div>
  );
};

List.propTypes = {
  characters: PropTypes.array,
};

export default List;
