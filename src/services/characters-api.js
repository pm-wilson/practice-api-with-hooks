export const getCharacters = async() => {
  const res = await fetch('http://last-airbender-api.herokuapp.com/api/v1/characters');
  const characters = await res.json();

  return characters;
};
