import Social from "@/Components/HomePage/Social/Social";
import { getNewsDetailById } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetailPage = async ({ params }) => {
  const { id } = await params;

  const newsDetails = await getNewsDetailById(id);

  return (
    <div className="max-w-285 mx-auto my-12">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1 md:col-span-3">
          <h2 className="text-[#403F3F] text-xl font-semibold">Dragon News</h2>

          <div className="mt-5 border border-[#E7E7E7] p-7 rounded-md">
            <div>
              <Image
                src={newsDetails.image_url}
                alt={newsDetails.title}
                width={700}
                height={700}
                className="w-full rounded-md"
              ></Image>
            </div>

            <div className="py-4">
              <h2 className="text-[#403F3F] font-bold text-2xl">
                {newsDetails.title}
              </h2>
            </div>

            <div>
              <p className="text-[#706F6F]">{newsDetails.details}</p>
            </div>

            <div className="mt-8">
              <Link href={`/categories/${newsDetails.category_id}`}>
                <button className="btn bg-[#D72050] text-white">
                  <FaArrowLeftLong /> All news in this category
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* social  */}
        <div className="col-span-1">
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;

/**
 {
    "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
    "others_info": {
        "is_todays_pick": false,
        "is_trending": true
    },
    "category_id": "01",
    "rating": {
        "number": 4.5,
        "badge": "Excellent"
    },
    "total_view": 488,
    "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
    "author": {
        "name": "Jimmy Dane",
        "published_date": "2022-08-24 17:27:34",
        "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
    "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
}
 */
