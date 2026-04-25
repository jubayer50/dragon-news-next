import AllCategories from "@/Components/HomePage/AllCategories/AllCategories";
import CategoryNews from "@/Components/HomePage/CategoryNews/CategoryNews";
import Social from "@/Components/HomePage/Social/Social";
import {
  getNewsByCategoriesData,
  getNewsCategoriesData,
} from "@/lib/dataFetch";

const NewsCategoryDetail = async ({ params }) => {
  const { Id } = await params;

  const news = await getNewsCategoriesData();
  const newsCategories = news.news_category;

  const categoryNews = await getNewsByCategoriesData(Id);

  return (
    <div className="max-w-285 mx-auto my-12 md:my-20 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-1 lg:col-span-3">
          <AllCategories
            newsCategories={newsCategories}
            activeId={Id}
          ></AllCategories>
        </div>

        <div className="col-span-1 lg:col-span-6 bg-purple-100">
          <CategoryNews categoryNews={categoryNews}></CategoryNews>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryDetail;
