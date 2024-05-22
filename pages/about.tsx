import Link from 'next/link'
import Image from 'next/image'

const aboutData = [
  {
    id: 1,
    text: 'About us',
    content: 'At Agserver, we are passionate about empowering farmers and driving agricultural innovation. Born out of a deep understanding of the challenges faced by the farming community, our mission is to provide cutting-edge solutions that address the most pressing problems in the agricultural sector.'
  },
  {
    id: 2,
    text: 'Our Story',
    content: 'Agserver was founded by a team of visionaries with a shared passion for agriculture and a commitment to leveraging technology for sustainable growth. Drawing from their diverse backgrounds in farming, engineering, and technology, our founders recognized the need for a comprehensive platform that could revolutionize the way farmers approach their operations.'
  },
  {
    id: 3,
    text: 'Our Approach',
    content: "We believe that the key to successful farming lies in the seamless integration of traditional agricultural knowledge and modern technological advancements. By combining our team's extensive on-the-ground experience with cutting-edge data analytics, AI, and IoT technologies, we have developed a suite of innovative solutions tailored to meet the unique needs of farmers."
  },
  {
    id: 4,
    text: 'Our Solutions',
    content: 'At Agserver, we offer a wide range of products and services designed to streamline farm operations, optimize resource utilization, and enhance overall productivity. From precision farming tools and smart irrigation systems to predictive analytics and real-time monitoring solutions, our offerings empower farmers to make informed decisions and achieve sustainable growth.'
  },
  {
    id: 5,
    text: 'Our Team',
    content: 'Our team is comprised of passionate individuals with a deep understanding of the agricultural industry and a commitment to driving positive change. With a diverse range of expertise spanning agronomy, data science, engineering, and business strategy, we collaborate closely to deliver comprehensive solutions that address the multifaceted challenges faced by modern farmers.'
  },
  {
    id: 6,
    text: 'Our Vision',
    content: 'At Agserver, we envision a future where technology and agriculture coexist in harmony, enabling farmers to maximize their potential while promoting environmental sustainability. We are dedicated to continuous innovation, fostering collaborations, and empowering farmers to unlock new opportunities for growth and success. Join us on this exciting journey as we redefine the future of agriculture, one solution at a time.'
  }
]

const AboutPage = () => (
  <section>
    <div className="h-64 overflow-hidden">
      <Image src={`/img/boy_right.svg`} width={0} height={0} style={{ width: 'auto', height: 'auto' }} alt='picture of a boy on a farm' />
    </div>
    <div className='p-4'>
      {
        aboutData.map((item) => <div key={item.id}><Title text={item.text} /> <Body content={item.content} /></div>)
      }

    </div>
  </section >
)

export default AboutPage


const Title = ({ text }) => {
  return <h2 className='text-ag-green text-2xl font-bold uppercase py-4'>{text}</h2>
}

const Body = ({ content }) => {
  return <p className='text-justify'>
    {content}
  </p>
}
