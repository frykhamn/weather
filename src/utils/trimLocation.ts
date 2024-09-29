export const trimLocation = (location: string) => {
  // Remove the word "Municipality" from the location string, case-insensitive
  const trimmedLocation = location.replace(/ Municipality/i, "").trim();
  console.log(trimmedLocation);
  return trimmedLocation;
};
