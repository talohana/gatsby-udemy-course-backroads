import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { siteDesc, siteTitle, siteUrl, image, twitterUsername } = site;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:creator" content={twitterUsername}></meta>
      <meta name="twitter:title" content={siteTitle}></meta>
      <meta name="twitter:description" content={siteDesc}></meta>
      <meta name="twitter:image" content={`${siteUrl}${image}`}></meta>
    </Helmet>
  );
};

export default SEO;
