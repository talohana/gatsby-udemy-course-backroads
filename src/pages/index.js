import { Link } from 'gatsby'
import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout/Layout'
import Services from '../components/Services/Services'
import SimpleHero from '../components/SimpleHero/SimpleHero'

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="Continue Exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempora? Consectetur sequi placeat"
        >
          <Link to="/tours" className="btn-white">
            Tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
