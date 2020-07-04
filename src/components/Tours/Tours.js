import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import TourList from './TourList';

const query = graphql`
  query {
    tours: allContentfulTour {
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

const Tours = () => {
  const { tours } = useStaticQuery(query);

  return <TourList tours={tours} />;
};

export default Tours;
