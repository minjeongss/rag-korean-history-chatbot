export const getResponse = async () => {
  const response = await fetch("/summary");
  return response.json();
};
