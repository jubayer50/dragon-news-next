import React from "react";

const getNewsCategoriesData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

const AllCategories = async () => {
  const news = await getNewsCategoriesData();
  const newsCategories = news.news_category;
  console.log(newsCategories, "new categories from cate. page");
  return (
    <div className="">
      <div className="text-center lg:text-left">
        <h2 className="text-[#403F3F] text-xl font-semibold">All Category</h2>

        <div className="mt-6">
          <ul className="space-y-7.5">
            {newsCategories.map((newsCategory) => (
              <li
                key={newsCategory.category_id}
                className="text-lg font-medium text-[#9F9F9F]"
              >
                {newsCategory.category_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;

/*
{
    "category_id": "01",
    "category_name": "Breaking News"
}
*/
