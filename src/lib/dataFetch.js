export const getNewsCategoriesData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export const getNewsByCategoriesData = async (Id) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/news/category/${Id}`,
  );
  const data = await res.json();
  return data.data;
};
