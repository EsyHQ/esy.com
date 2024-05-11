import React from 'react';
import Layout from "src/components/Layout"


const TermsPage = () => {
  return (
    <Layout>
      <h1>Terms of Service</h1>
      <embed src="/terms.pdf" width="100%" height="600px" />
    </Layout>
  );
};

export default TermsPage;