export const getCategoriesIdNumber = (category) => {
  if (category === "Politics" || category === "politics") return 1;
  if (category === "International" || category === "international") return 2;
  if (category === "Technology" || category === "technology") return 3;
  if (category === "Shows" || category === "shows") return 4;
  if (category === "Sports" || category === "sports") return 5;
  if (category === "Design" || category === "design") return 6;
};

export const getCategoriesName = (category) => {
  if (category === 1) return "Politics";
  if (category === 2) return "International";
  if (category === 3) return "Technology";
  if (category === 4) return "Shows";
  if (category === 5) return "Sports";
  if (category === 6) return "Design";
};
