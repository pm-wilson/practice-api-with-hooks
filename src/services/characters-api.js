export const getCharacters = async() => {
  const res = await fetch('https://cors-anywhere.herokuapp.com/https://last-airbender-api.herokuapp.com/api/v1/characters');
  const characters = await res.json();

  return characters;
};
