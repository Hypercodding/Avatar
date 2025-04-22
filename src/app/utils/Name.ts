export const FirstLetter = (name: string) => {
  return name.split("").at(0)?.toUpperCase();
};
