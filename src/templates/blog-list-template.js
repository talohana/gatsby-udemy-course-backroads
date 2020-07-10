import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import BlogCard from '../components/Blog/BlogCard';
import Layout from '../components/Layout';
import Title from '../components/Title';
import styles from '../css/blog.module.css';

const BlogListTemplate = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `/blogs/` : `/blogs/${currentPage - 1}`;
  const nextPage = `/blogs/${currentPage + 1}`;

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node} />
          ))}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Previous
            </AniLink>
          )}
          {Array.from({ length: numPages }).map((_, i) => (
            <AniLink
              fade
              key={i}
              to={`/blogs/${i === 0 ? '' : i + 1}`}
              activeClassName={styles.active}
              className={styles.link}
            >
              {i + 1}
            </AniLink>
          ))}
          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(sort: { fields: published, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default BlogListTemplate;
