export const trimLocation = (location: string) => {
  // Remove the word "Municipality" from the location string
  const trimmedLocation = location.replace(" Municipality", "");
  console.log(trimmedLocation);
  return trimmedLocation;
};
