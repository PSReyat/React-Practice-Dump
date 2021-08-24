export type Individual = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

export enum Genders {
  MALE = "MALE",
  FEMALE = "FEMALE",
  GENDERQUEER = "GENDERQUEER",
  NON_BINARY = "NON-BINARY",
  GENDERFLUID = "GENDERFLUID",
  POLYGENDER = "POLYGENDER",
  AGENDER = "AGENDER",
  BIGENDER = "BIGENDER",
}

export const numberOfGenders = () => {
  const arrayOfGenders = Object.values(Genders);
  return arrayOfGenders;
};
