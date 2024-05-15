import React from 'react';
import Layout from "src/components/Layout"
import SEO from 'src/components/SEO'


const CookiesPage = () => {
  return (
    <Layout hasFooter={false}>
      <iframe src="/cookies.pdf" className="w-full h-4/5" />
    </Layout>
  );
};

export default CookiesPage;


export const Head = () => {
  const meta = {
      title: 'Cookies Policy | esy Journal',
      description: 'esy Journal is the leading platform for crafting rich and expressive essays with the help of our powerful and trusted AI writing assistant. Unleash your creativity and produce your most impressive work today.',
  }

  return <SEO meta={meta} />
}