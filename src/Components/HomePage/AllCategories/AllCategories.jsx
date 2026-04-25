import Link from "next/link";

const AllCategories = async ({ newsCategories, activeId }) => {
  return (
    <div className="">
      <div className="text-center lg:text-left">
        <h2 className="text-[#403F3F] text-xl font-semibold">All Category</h2>

        <div className="mt-6">
          <ul className=" space-y-3 md:space-y-4">
            {newsCategories.map((newsCategory) => (
              <li
                key={newsCategory.category_id}
                className={`text-lg font-medium text-[#9F9F9F] ${activeId === newsCategory.category_id && "bg-[#E7E7E7] text-[#403F3F] rounded-md"}`}
              >
                <Link
                  className="block  py-2 pl-6"
                  href={`/categories/${newsCategory.category_id}`}
                >
                  {newsCategory.category_name}
                </Link>
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
