const getGotCharacter = async (nameOfCharacter: string) => {
  const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${nameOfCharacter}`);
  const data = await response.json();

  return data;
};

export default getGotCharacter;
