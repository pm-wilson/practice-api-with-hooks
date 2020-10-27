
export async function getDetails(id) {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);
  const details = await res.json();

  return details;
}
