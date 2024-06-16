import React from 'react';
import Layout from "src/components/Layout"
import SEO from 'src/components/SEO'


const PolicyPage = () => {
  return (
    <Layout hasFooter={false}>
      <embed src="/policy.pdf" className="w-full h-4/5" />
    </Layout>
  );
};

export default PolicyPage;


export const Head = () => {
  const meta = {
      title: 'Privacy Policy | Esy',
      description: 'Write your next paper with Esy, an AI assistant that learns your writing style to create original, authentic essays.',
  }

  return <SEO meta={meta} />
}