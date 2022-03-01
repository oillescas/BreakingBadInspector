type Character = {
  appearance: number[];
  char_id: number;
  name: string;
  nickname: string;
  birthday: string;
  category: string;
  img: string;
  status: string;
  better_call_saul_appearance: number[];
  occupation: string[];
  portrayed: string;
};

type Quote = { quote: string };

export type { Character, Quote };