import React from 'react'
import FeedItem from '../components/FeedItem'
import Tab from '../components/common/Tab'

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





