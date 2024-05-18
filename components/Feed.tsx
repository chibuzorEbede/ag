import React, { useState } from 'react'
import FeedItem from '../components/FeedItem'
import Tab from '../components/common/Tab'
import { data } from '../utils/placeholder-data'


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





