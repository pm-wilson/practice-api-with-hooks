import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../services/characters-api';
import List from '../display/List';

const Controller = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <div>
      <List characters={characters} />
    </div>
  );
};

export default Controller;
