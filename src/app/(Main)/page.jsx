import AllCategories from "@/Components/HomePage/AllCategories/AllCategories";
import Social from "@/Components/HomePage/Social/Social";

const getNewsCategoriesData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

const HomePage = async () => {
  const news = await getNewsCategoriesData();
  const newsCategories = news.news_category;

  return (
    <div className="max-w-285 mx-auto my-12 md:my-20 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-1 lg:col-span-3">
          <AllCategories newsCategories={newsCategories}></AllCategories>
        </div>

        <div className="col-span-1 lg:col-span-6 bg-purple-100">all news</div>

        <div className="col-span-1 lg:col-span-3">
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
