export const dateToLocalDay = (date: string): string => {
  return new Intl.DateTimeFormat("en-IN", { weekday: "long" }).format(
    new Date(date)
  );
};
