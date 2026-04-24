import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      id: "1",
      title: "Breaking News: Major Event Unfolds in the City",
    },
    {
      id: "2",
      title: "Breaking News: New Policy Announced by the Government",
    },
    {
      id: "3",
      title: "Breaking News: Sports Team Wins Championship",
    },
  ];

  return (
    <div className="max-w-285 mx-auto my-6 md:my-8">
      <div className="bg-[#F3F3F3] p-2 md:p-4 flex justify-between items-center">
        <button className="btn bg-[#D72050] text-white md:font-medium md:text-xl">
          Latest
        </button>

        <div className="pl-2">
          <Marquee pauseOnHover={true} speed={35}>
            {news.map((item) => (
              <span
                key={item.id}
                className="md:text-lg font-semibold text-[#403F3F] mr-6"
              >
                {item.title}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
