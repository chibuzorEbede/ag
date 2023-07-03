import Link from 'next/link'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { formatNumber } from '../components/utils/format';
import { BsChat, BsEye, BsSuitHeart, BsBookmarkCheck, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

function FeedItem({ category, img, name, date, title, content, comments, views, likes }) {

  let iconStyles = { color: "green", fontSize: "1em" }
  return <div className="feed-item rounded-lg p-3 flex flex-col shadow-3xl">
    <p className="category-text ml-auto text-xs capitalize text-[#615d5d7e]">{category}</p>
    <div className='feedbox md:flex flex-row'>
      <div className='upper'>
        <div className="user flex  items-end gap-2  py-2 md:flex-col md:pr-6 md:items-center">
          <Image src={img} width={33} height={30} alt='user-image'></Image>
          <p className="name capitalize text-[#615D5D] font-normal text-xs md:text-center">{name}</p>
          <p className="date text-xs text-[#615d5d83]">{date}</p>
        </div>
      </div>
      <div className='lower'>
        <div className="body">
          <p className="title font-semibold text-medium text-black">{title}</p>
          <p className=" text-sm font-normal mt-1 mb-1 tracking-wider ">{content}</p>
        </div>
        <div className="spacer h-[.02rem]  bg-slate-200 w-full mt-2 mb-3"></div>
        <div className="actions flex justify-between align-top gap-4  w-full px-2">
          <div className='chats flex justify-center items-center'>
            <BsChat style={iconStyles} />
            <p className="chat-count ml-1 text-xs">{comments}</p>
          </div>
          <div className='views flex justify-center items-center'>
            <BsEye style={iconStyles} />
            <p className="views-count ml-1 text-xs">{formatNumber(views)}</p>
          </div>

          <div className='likes flex justify-center items-center'>
            <BsSuitHeart style={{ color: "red" }} />
            <p className="likes-count ml-1 text-xs">{formatNumber(likes)}</p>
          </div>
          <div className='views flex justify-center items-center'>
            <BsBookmarkCheck style={iconStyles} />
            <p className="views-count ml-1 text-xs"></p>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default FeedItem