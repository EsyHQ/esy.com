import React from 'react';
import Layout from "src/components/Layout"


const PolicyPage = () => {
  return (
    <Layout>
      <h1>Privacy Policy</h1>
      <embed src="/policy.pdf" width="100%" height="600px" />
    </Layout>
  );
};

export default PolicyPage;