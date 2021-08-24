import { Individual } from "../types/PersonTypes";

const url = "http://localhost:8000/people";

export const fetchData = async (): Promise<Individual[]> => {
  const data = await (await fetch(url)).json();

  return data.map((people: Individual) => people);
};
