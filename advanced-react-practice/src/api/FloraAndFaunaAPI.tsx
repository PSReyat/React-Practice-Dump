import { Animals } from "../components/Animals";
import { Plants } from "../components/Plants";

const URL = "http://localhost:8000";

export const fetchFaunaAPI = async () => {
  const fetchAnimals = await (await fetch(URL)).json();

  return fetchAnimals.animal.map((a: typeof Animals) => a);
};

export const fetchFloraAPI = async () => {
  const fetchPlants = await (await fetch(URL)).json();

  return fetchPlants.plants.map((p: typeof Plants) => p);
};
