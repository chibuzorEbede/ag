import Categories from '../components/Categories'
import Feed from '../components/Feed'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import { Suspense } from 'react'
import { FeedSkeleton } from '../components/skeletons'



const IndexPage = () => (
  <>
    <Hero />
    <SearchBar />
    <div className="grid md:grid-cols-4">
      <Suspense fallback={<FeedSkeleton />}>
        <Feed />
      </Suspense>
      <Categories />
    </div>


  </>
)

export default IndexPage









