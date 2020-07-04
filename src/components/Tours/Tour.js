import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import React from 'react';
import { FaMap } from 'react-icons/fa';
import styles from '../../css/tour.module.css';

const defaultImageQuery = graphql`
  query {
    defaultImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Tour = ({ tour }) => {
  const { defaultImage } = useStaticQuery(defaultImageQuery);

  const { name, price, country, days, slug, images } = tour;

  const [mainImage = defaultImage.childImageSharp] = images;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fluid={mainImage.fluid} alt="single tour" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days}</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }),
};

export default Tour;
