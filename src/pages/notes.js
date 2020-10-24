import React from 'react';
import Layout from '../components/notionLayout';
import ArticleBlockLink from '../components/ArticleBlockLink';
import { graphql } from 'gatsby';
import Head from "../components/head"

const IndexPage = ({ data }) => {
  return (
    <Layout>
        <Head title="Notes"/>
        <h1>Notes</h1>
        <p>Here I will be publishing some of the notes I take on notion.</p>
       
      {data.allNotionPageBlog.edges.map(edge => (
        <ArticleBlockLink
          title={edge.node.title}
          link={`/gatsby-source-notion-so/${edge.node.slug}`}
          excerpt={edge.node.excerpt}
          icon={edge.node.pageIcon}
        />
      ))}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allNotionPageBlog(
      filter: { isDraft: { eq: false } }
      sort: { fields: [indexPage], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          excerpt
          pageIcon
        }
      }
    }
  }
`;