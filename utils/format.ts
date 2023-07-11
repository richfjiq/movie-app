export const getDuration = (minutes: number) => {
  const mins = minutes % 60;
  const hours = Math.floor(minutes / 60);
  return `${hours} h ${mins} min`;
};
