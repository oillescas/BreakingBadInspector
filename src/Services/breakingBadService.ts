import { Character, Quote } from "Types";

const API_URL = 'https://breakingbadapi.com/api';

async function getCharacters(): Promise<Character[]> {
  const response = await fetch(`${API_URL}/characters`);
  return response.json();
}


async function getCharacter(id: number): Promise<Character> {
  const response = await fetch(`${API_URL}/characters/${id}`);
  const character = await response.json();
  return character[0];
}

async function getQuotes(name: string): Promise<Quote[]> {
  let url = new URL(`${API_URL}/quote/random`);
  let params = url.searchParams;
  params.append("author", name);
  const response = await fetch(url.toString());
  return response.json();
}



export { getCharacters, getCharacter, getQuotes };

