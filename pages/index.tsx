import Categories from '../components/Categories'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'



const IndexPage = () => (
  <>

    <Hero />
    <SearchBar />

    <div className="grid md:grid-cols-4">
      <Feed />
      <Categories />
    </div>

    <Footer />

  </>
)

export default IndexPage









