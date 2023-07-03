import React from 'react'
import FeedItem from '../components/FeedItem'
import { log } from 'console'

let data = [
    {
        id: 1,
        category: "agricultural business",
        img: "/img/peter.png",
        name: "peter griffin",
        date: "22.08.2020",
        title: "What is the best feed for broiler chickens",
        content: "How do you think I can scale my grinding business. I have machines but cant access the quantity of cassava I need to scale.",
        comments: 200,
        views: 1200,
        likes: 2300
    },
    {
        id: 9,
        category: "agricultural business",
        img: "/img/peter.png",
        name: "peter griffin",
        date: "22.08.2020",
        title: "What is the best feed for broiler chickens",
        content: "How do you think I can scale my grinding business. I have machines but cant access the quantity of cassava I need to scale.",
        comments: 200,
        views: 1200,
        likes: 2300
    },
    {
        id: 2,
        category: "agricultural business",
        img: "/img/peter.png",
        name: "peter griffin",
        date: "22.08.2020",
        title: "What is the best feed for broiler chickens",
        content: "How do you think I can scale my grinding business. I have machines but cant access the quantity of cassava I need to scale.",
        comments: 200,
        views: 1200,
        likes: 2300
    },
    {
        id: 3,
        category: "agricultural business",
        img: "/img/peter.png",
        name: "peter griffin",
        date: "22.08.2020",
        title: "What is the best feed for broiler chickens",
        content: "How do you think I can scale my grinding business. I have machines but cant access the quantity of cassava I need to scale.",
        comments: 200,
        views: 1200,
        likes: 2300
    },
    {
        id: 4,
        category: "agricultural business",
        img: "/img/peter.png",
        name: "peter griffin",
        date: "22.08.2020",
        title: "What is the best feed for broiler chickens",
        content: "How do you think I can scale my grinding business. I have machines but cant access the quantity of cassava I need to scale.",
        comments: 200,
        views: 1200,
        likes: 2300
    },
    {
        id: 5,
        category: "agricultural business",
        img: "/img/peter.png",
        name: "peter griffin",
        date: "22.08.2020",
        title: "What is the best feed for broiler chickens",
        content: "How do you think I can scale my grinding business. I have machines but cant access the quantity of cassava I need to scale.",
        comments: 200,
        views: 1200,
        likes: 2300
    }
]
const Feed = () => {
    return (

        <main className="feed p-4 grid gap-4 md:col-start-1 md:col-end-4">
            <>
                <Tab />
            </>
            {
                data.map((item) => <FeedItem key={item.id} category={item.category} img={item.img} name={item.name} date={item.date} title={item.title} content={item.content} comments={item.comments} views={item.views} likes={item.likes} />)
            }

        </main>
    )
}

export default Feed

const clickHandler = () => { console.log('clicked') }

let isActive = true;

const Tab = () => {
    return <div className='border-b-2 border-ag-green'>
        <button className={`p-4` + isActive ? `bg-ag-green text-ag-gold` : `text-black-400`} onClick={() => clickHandler}>Recent questions</button>
        <button>Recent answers</button>
    </div >
}

