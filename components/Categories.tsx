import Link from 'next/link'
import React from 'react'

let data = [
    {
        id: 1,
        title: 'Agribuisness',
        count: 3

    },
    {
        id: 2,
        title: 'fishing',
        count: 6

    },
    {
        id: 3,
        title: 'piggery',
        count: 2

    },
    {
        id: 4,
        title: 'shrimp farming ',
        count: 5

    },
    {
        id: 5,
        title: 'shrooms',
        count: 3

    },
    {
        id: 6,
        title: 'soil',
        count: 9

    },
    {
        id: 7,
        title: 'livestock',
        count: 8

    },
    {
        id: 8,
        title: 'rice',
        count: 4

    }
]
const Categories = () => {
    return (
        <div className="cover p-4">
            <section className="question-categories p-4 rounded-lg  shadow-3xl ">
                <p className="text-2xl text-ag-green underline mb-4">Question Categories</p>

                {data.map((item) => <CategoryItem key={item.id} title={item.title} count={item.count} />)}
            </section>
        </div>
    )
}

export default Categories

const CategoryItem = ({ title, count }) => {
    return (
        <Link href='/' className='category-item'>
            <div className="flex justify-between mb-4">
                <p className='font-light capitalize'>{title}</p>
                <p className='count'>{count}</p>
            </div>
        </Link>
    )
}