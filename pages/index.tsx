import Categories from '../components/Categories'
import Feed from '../components/Feed'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
// import { FeedSkeleton } from '../components/skeletons'



const IndexPage = () => (
  <>
    <Hero />
    <SearchBar />
    <div className="grid md:grid-cols-4">
      <Feed />
      <Categories />
    </div>


  </>
)

export default IndexPage









