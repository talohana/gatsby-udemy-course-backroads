import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import { FaMap, FaMoneyBill } from 'react-icons/fa';
import Layout from '../components/Layout';
import Day from '../components/SingleTour/Day';
import StyledHero from '../components/StyledHero';
import styles from '../css/template.module.css';
const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    images,
    journey,
  } = data.tour;

  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, i) => (
              <Img key={i} fluid={item.fluid} alt="single tour" className={styles.image} />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBill className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days}</h4>
          <p className={styles.desc}>{description}</p>
          <div className={styles.journey}>
            {journey.map((item, i) => (
              <Day key={i} day={item.day} info={item.info} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetTour($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;

export default TourTemplate;