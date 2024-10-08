import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="bg-black">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>
    <Banner/>

    <main className='max-w-7xl mx-auto px-8 sm:px-16 bg-black'>
      <section className="pt-5">
        <h2 className="text-4xl font-semibold pb-5 text-white">Explore Nearby</h2>
        {/* Pull some data from a server - API endpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 xl:grid-cols-4">
          {exploreData?.map(({img, distance, location}) => (
            <SmallCard 
            key={img}
            img={img} 
            distance={distance} 
            location={location} />
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-semibold py-8 text-white">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
        {cardsData?.map(({img, title}) => (
          <MediumCard key={img} img={img} title={title}/>
        ))}
        </div>
      </section>

      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb."
        buttonText="Get Insipired"
       />
    </main>
    <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(
    (res)=> res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1")
  .then(
    (res)=> res.json()
  );

  return  {
    props: {
      exploreData, cardsData,
    }
  }
}
