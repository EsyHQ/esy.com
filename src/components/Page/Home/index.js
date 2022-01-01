import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

// import GlobalStyle from '../styles/globalStyles'
import CssBaseline from '@mui/material/CssBaseline';


import { createEditor, Editor, Transforms } from "slate"
import { Slate, Editable, withReact } from 'slate-react'

import { ethers } from 'ethers'
import { EtherscanProvider } from "@ethersproject/providers"


import Header from 'src/components/Header'
import DefaultElement from 'src/components/Editor/defaultElement'
import CodeElement from 'src/components/Editor/codeElement'


const IndexPage = ({ fetchAccounts }) => {
    const [value, setValue] = React.useState([
      {
      type: 'paragraph',
      children: [{ text: 'Start typing.....' }],
    },
  ])

  const editor = React.useMemo(() => withReact(createEditor()), [])

  const onKeyDown = event => {
    if (event.key === '`' && event.ctrlKey) {
      event.preventDefault()

      console.log(event, 'event')

      // Determine whether any of the currently selected blocks are code blocks.
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
      })
      
      // Toggle the block type depending on whether there's already a match.
      Transforms.setNodes( // Toggle doesn't allow switching back to paragraph, must review.
        editor,
        { type: match ? 'paragraph' : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    }
  }

  const renderElement = React.useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])


  const handleConnect = (event) => {
    event.preventDefault()
    
    fetchAccounts()
  }



  return (
    <MainSection>
      <CssBaseline />
      <Helmet><title>Esy</title></Helmet>
      
      <Header handleConnect={handleConnect} />

      <SectionWrapper>
        <EditorSection>
          <SectionTitle>Editor</SectionTitle>
          <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
            <Editable
              renderElement={renderElement}
              onKeyDown={onkeydown}
            />
          </Slate>
        </EditorSection>
      </SectionWrapper>
    </MainSection>
  )
}
 



export default IndexPage





const MainSection = styled.main`
  // display: flex;
  flex: 1;
  margin: 0 auto;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  font-family: 'sans-serif';
  height: 100%;
  background: #f5f5f5;
  flex-direction: column;
  color: #000;
`

const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
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