import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import Title from '../Title';
import Tour from '../Tours/Tour';

const query = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const data = useStaticQuery(query);

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />

      <div className={styles.center}>
        {data.featuredTours.edges.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  );
};

export default FeaturedTours;
