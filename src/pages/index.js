import React, { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import GlobalStyle from '../styles/globalStyles'

import { createEditor } from "slate"
import { Slate, Editable, withReact } from 'slate-react'


const IndexPage = () => {

  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <MainSection>
      <GlobalStyle />
      <Helmet>
        <title>Esy</title>
      </Helmet>

      <SectionWrapper>
        <SectionTitle>Editor</SectionTitle>
        <Slate
          editor={editor}
          value={value}
          onChange={newValue => setValue(newValue)}
        >
          <Editable />
        </Slate>
      </SectionWrapper>
    </MainSection>
  )
}

export default IndexPage


const MainSection = styled.main`
  display: flex;
  flex: 1;
  margin: 0 auto;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: 'sans-serif';
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`


const SectionTitle = styled.h1`
  font-size: 36px;
`

const SectionParagraph = styled.p`
  font-size: 23px;

  @media(max-width: 600px) {
    font-size: 18px;
  }
`