import AllCategories from "@/Components/HomePage/AllCategories/AllCategories";

const HomePage = () => {
  return (
    <div className="max-w-285 mx-auto my-12 md:my-20 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-1 lg:col-span-3">
          <AllCategories></AllCategories>
        </div>

        <div className="col-span-1 lg:col-span-6 bg-purple-100">all news</div>

        <div className="col-span-1 lg:col-span-3 bg-yellow-100">
          {" "}
          all social
        </div>
      </div>
    </div>
  );
};

export default HomePage;
