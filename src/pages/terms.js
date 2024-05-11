import React from 'react';
import Layout from "src/components/Layout"
import SEO from 'src/components/SEO'

const TermsPage = () => {
  return (
    <Layout>
      <h1>Terms of Service</h1>
      <embed src="/terms.pdf" width="100%" height="600px" />
    </Layout>
  );
};

export default TermsPage;


export const Head = () => {
  const meta = {
      title: 'Cookies Policy | esy Journal',
      description: 'esy Journal is the leading platform for crafting rich and expressive essays with the help of our powerful and trusted AI writing assistant. Unleash your creativity and produce your most impressive work today.',
  }

  return <SEO meta={meta} />
}