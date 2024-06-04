import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useMediaQuery } from 'src/hooks/useMediaQuery';


const FooterEnd = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <FooterEndContainer>
      <Trademark>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy;{' '}
          {/* 2024 Esy LLC. All Rights Reserved. */}
          2024 Esy LLC.
        </a>
      </Trademark>
      <FooterEndRight>
        <LegalLinks>
          {isMobile ? (
            <>
              <a href="/terms.pdf" target="_blank" rel="noopener noreferrer">
                Terms
              </a>
              <a href="/policy.pdf" target="_blank" rel="noopener noreferrer">
                Policy
              </a>
              <a href="/cookies.pdf" target="_blank" rel="noopener noreferrer">
                Cookies
              </a>
            </>
          ) : (
            <>
              <Link to="/terms">Terms</Link>
              <Link to="/policy">Policy</Link>
              <Link to="/cookies">Cookies</Link>
            </>
          )}
        </LegalLinks>
      </FooterEndRight>
    </FooterEndContainer>
  );
};

export default FooterEnd;

const FooterEndContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 25px 50px;
  background: #000;

  a {
    opacity: 0.5;
    font-size: 12px !important;

    @media (max-width: 600px) {
      font-size: 12px !important;
    }
  }

  @media (max-width: 600px) {
    padding: 25px;
  }
`;

const Trademark = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 150px;

  a {
    :not(:last-child) {
      margin-right: 12px;
    }
  }
`;

const FooterEndRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;