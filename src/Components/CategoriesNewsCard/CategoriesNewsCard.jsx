import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";

const CategoriesNewsCard = ({ news }) => {
  return (
    <div className="mt-5 border border-[#E7E7E7] rounded-md">
      {/* author */}
      <div className="bg-[#F3F3F3] px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={news.author.img}
            alt={news.author.name}
            width={40}
            height={40}
            className="rounded-full"
          ></Image>

          <div>
            <h4 className="font-semibold text-[#403F3F]">
              {news.author?.name}
            </h4>
            <p className="text-[#706F6F]">{news.author?.published_date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[22px] text-[#706F6F]">
          <IoBookmarkOutline />
          <HiOutlineShare />
        </div>
      </div>

      {/* card body */}
      <div className="p-5">
        {/* head line */}
        <div>
          <h2 className="text-[#403F3F] font-bold text-xl">{news.title}</h2>
        </div>

        {/* image */}
        <div className="py-5">
          <Image
            src={news.image_url}
            alt={news.title}
            width={300}
            height={300}
            className="w-full rounded-md"
          ></Image>
        </div>

        {/* description */}
        <div className="pb-5">
          <p className="text-[#706F6F] line-clamp-2">{news.details}</p>
          <Link href={`/news/${news._id}`}>
            <span className="text-[#FF8C47] font-semibold">See More...</span>
          </Link>
        </div>

        {/* footer */}
        <div className="pt-5 border-t border-[#E7E7E7] flex justify-between items-center text-[#706F6F]">
          <div className="flex items-center gap-2">
            <FaStar className="text-[#FF8C47] text-xl" />
            <p>{news.rating?.number}</p>
          </div>

          <div className="flex items-center gap-2">
            <IoMdEye className=" text-[22px]" />
            <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesNewsCard;

/**
 * 
 {
    "_id": "61f9ce168f7b15aadecb1d1fc80c72f7",
    "others_info": {
        "is_todays_pick": false,
        "is_trending": false
    },
    "category_id": "04",
    "rating": {
        "number": 4.5,
        "badge": "Excellent"
    },
    "total_view": 100,
    "title": "“Max Verstappen has plenty trophies” – Lando Norris wants $50 Million a year Dutch sensation to give him his trophy",
    "author": {
        "name": "system",
        "published_date": "2022-08-26 00:37:24",
        "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/1rcTYYB/unsplash-Eh-Tc-C9s-YXsw-16.png",
    "image_url": "https://i.ibb.co/CVg1Nrt/unsplash-Eh-Tc-C9s-YXsw-5.png",
    "details": "Lando Norris asks Max Verstappen to lend him the 2022 Dutch GP trophy as he predicts the Dutchman as a sure winner. Max Verstappen returns to his home Grand Prix in Zandvoort for the 2022 Dutch GP. And it seems like the Dutchman will enjoy another easy victory this weekend. Max has a 93-point advantage in the drivers’ championship over Ferrari’s Charles Leclerc ahead of the race. And at this rate, Max can cruise comfortably, to claim his 2nd Championship title this season. But Max does not want to lose his focus and momentum ahead of his home GP. He wants to claim his 10th win of the season in front of his home crowd in style. Recently, the Dutch GP unveiled a rather unique-looking trophy. And McLaren driver Lando Norris liked the new trophy.   a journalist asks lando if he likes the dutch gp trophy and if it will be his on sunday: “no, it’s max’s. everyone knows it’s max’s already. maybe max will give it to me, he has plenty.” i love lando norris and max verstappen friendship pic.twitter.com/LQh9cnwjLv — comfort lando norris (@safeforlando) August 31, 2022 The Brit was grabbing a bicycle in the F1 paddock when he was interviewed by Dutch press personnel. Norris was asked what he thought of the Dutch Grand Prix trophy. Norris replied, “Oh I loved it.” But he admitted he would not be able to take the trophy home. He said, “No, it’s Max’s. Everyone knows it’s Max’s already. Maybe he will give it to me, he has plenty.” Seems like Norris is not alone. As it is becoming more obvious amongst the drivers that the Dutch GP trophy has Max’s name written on it. And with a win this Sunday, even the Championship might have Max’s name for a second time. Also Read: Lando Norris hits out at Daniel Ricciardo amidst his $16.7 Million contract termination Max Verstappen unveils a new helmet for the Dutch GP Max Verstappen became the first Dutch driver to win an F1 race when he won the 2016 Spanish GP. He also became the first Dutchman to win the Championship title. And he would like to pay tribute to his father, Jos Verstappen who coached him during his karting days and developed him as a racing driver. Jos has also served as a manager for Max. Jos was an F1 driver who raced in F1 from 1994 to 2003. He has 106 race starts with no wins and he raced for a variety of teams from Benetton, Arrows, Tyrell and Honda. And for the Dutch GP, Max would be wearing a helmet that resembles the one worn by his father. He will be wearing it on a track on which he has raced numerous times while Karting with his father.   ᴀ ᴛʀɪʙᴜᴛᴇ ᴛᴏ ᴊᴏs ᴠᴇʀsᴛᴀᴘᴘᴇɴ Returning to Zandvoort as a World Champion, Max chose to honor his mentor and Dad by using Jos his iconic helmet design as an inspiration 1:2 and 1:4 scale models are now available https://t.co/SxY1Y14OH2 pic.twitter.com/tz2DdtXJM4 — Max Verstappen (@VerstappenCOM) August 30, 2022 Verstappen said in a video posted by him, “It’s a bit emotional as well. But I think it’s just really special to drive something like this because it’s also how I started in go-karting.” He added, “All the old pictures I have of go-karting are with this iconic design. So that’s why we thought it was a great idea to bring this back alive around Zandvoort.” Jos has never won a race in his F1 career. But wearing this helmet, Max might win his 10th race of the season and cement his name on the Championship trophy. Also Read: Max Verstappen can equalize Michael Schumacher-Sebastian Vettel joint record if he wins 4 more races in 2022 The post “Max Verstappen has plenty trophies” – Lando Norris wants $50 Million a year Dutch sensation to give him his trophy appeared first on The SportsRush."
}
 */
