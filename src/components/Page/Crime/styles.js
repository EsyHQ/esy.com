import styled from "styled-components"


const BlogWrapper = styled.section`
    height: 100%;
    width: 100%;
    background: rgba(12,10,29);
    padding: 40px 5%;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-between;

    .gatsby-image-wrapper-constrained {
        width: 100%;
    }
    
    img {
        border-radius: 6px;
        border: 1px solid rgba(0,0,0,0.22);
        box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.3);
    }
`


const BlogPostWrapper = styled.div`
  margin-top: 50px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2% 5%;
  background: rgba(12,10,29);

  .inline-images {
    text-align: center;
    max-width: 900px;
    margin: 100px auto;
    padding: 0px 10%;
  }

  img {
    border-radius: 6px;
  }


  .blog-post-content {
    ul {
      margin: 30px 0;
    }

    li {
      color: #fff;
      margin: 10px 0;

      ::marker {
        color: rgb(209, 78, 255);
        font-weight: bold;
      }

      p {
        margin-left: 6px;
      }
    }

    h2 {
      font-weight: 500 !important;
    }

    img {
      display: flex;
      max-width: 700px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }

    a {
      color: rgb(209, 78, 255);
      font-family: Poppins,sans-serif!important;
      :hover {
        text-decoration: underline;
      }
    }

    > figure {

      img {
        width: 100%;
        height: 100%;
        
      }

      figcaption {
        margin-bottom: 50px;
        text-align: center;
      }
    }

    .twitter-tweet {
      margin: 75px auto !important;
    }

    p {
      font-size: 21px;
      margin-bottom: 30px;
      line-height: 32px;
      font-family: Poppins, sans-serif; 
      font-weight: 400;
      color: #f2f4fb;

      @media(max-width: 600px) {
        font-size: 20px;
      }
    }


    strong {
      font-weight: 700;
      font-family: Poppins, sans-serif;    

    }


    h2, h3 { 
      margin-top: 50px;
      margin-bottom: 20px;
      text-align: left;
      color: rgb(209, 78, 255);
    }

    h2 {
      font-family: Poppins, sans-serif;  
      font-size: 34px;
      font-weight: bold;
      letter-spacing: 0px;
    }

    h3 {
      font-family: Poppins, sans-serif;  
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 0px;
    }

    blockquote {
      margin: 50px 0;
      color: rgba(255, 255, 255, 0.8);
      font-family: Poppins, sans-serif;  
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0.75px;
      position: relative;
      border-left: 10px solid rgb(209, 78, 255);
      padding: 2% 4%;
    }

    figure {
      margin-bottom: 20px;
      text-align: center;
      max-width: 900px;
      margin: 100px auto;
      padding: 0 10%;
    }
  }

  section {
    padding: 0;
    padding-bottom: 5%;
  }
  
  h1 {
    color: rgb(255, 255, 255);
    font-family: Poppins, sans-serif;    
    font-weight: 600;
    letter-spacing: 0px;
    border-bottom: 1px solid rgb(64, 70, 72);
    padding-bottom: 20px;
    font-size: 42px;

    @media(max-width: 600px) {
      font-size: 28px;
      // text-align: center;
      padding-top: 5%;
    }
  }
`

const BlogPostInner = styled.div`
  width: 100%;
  padding: 0 10%;
  max-width: 1800px;

  @media(max-width: 1500px) {
    padding: 0;
  }

`

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  img {
      max-width: 1300px;
      width: 100%;
  }
`

const PrePostContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media(max-width: 1600px) {
    padding: 0;
  }
`


const PostTitle = styled.h1`
  text-align: center;
`

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const PrimaryMeta = styled.div`
  display: flex;
  align-items: center;
  .divider {
    margin: 0 5px;
    color: rgba(255,255,255, 0.5)
  }
`


const FeatureImage = styled.div`
  width: 100%;
  background: #151718;
  text-align: center;

  img {
    width: 100%;

  }
`



export {
    BlogWrapper,
    BlogPostWrapper, 
    BlogPostInner, 
    PostTitle, 
    PostMeta, 
    PrimaryMeta, 
    FeatureImage, 
    PrePostContainer, 
    ImageWrapper
}  