const CategoryNews = ({ categoryNews }) => {
  return (
    <div>
      <div>
        <h2 className="text-[#403F3F] text-xl font-semibold">
          Dragon News Home
        </h2>

        <div>
          {categoryNews.length > 0 ? (
            categoryNews.map((category) => (
              <h2 key={category._id}>{category.title}</h2>
            ))
          ) : (
            <h2 className="text-center text-lg font-medium mt-10">
              No News Found!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
