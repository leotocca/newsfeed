export const getCategoriesIdNumber = (category) => {
  if (category === "Politics" || category === "politics") return 1;
  if (category === "International" || category === "international") return 2;
  if (category === "Technology" || category === "technology") return 3;
  if (category === "Shows" || category === "shows") return 4;
  if (category === "Sports" || category === "sports") return 5;
  if (category === "Design" || category === "design") return 6;
};
