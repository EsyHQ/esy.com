
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { CodeHighlightNode, CodeNode } from "@lexical/code";

import { onError, onChange } from 'src/modules/editor'
import CodeHighlightPlugin from "./Plugins/CodeHighlightPlugin"
import AutoFocusPlugin from './Plugins/AutoFocusPlugin'
import TreeViewPlugin from './Plugins/TreeViewPlugin'
import UpdateLocalStoragePlugin from './Plugins/UpdateLocalStoragePlugin'

import 'src/styles/editor/index.scss'
 
import { Publish } from '@mui/icons-material'
import SendIcon from 'src/svg/send.svg'
import BrainIcon from 'src/svg/brain.svg'

import theme from './theme'



const LexicalEditor = ({ initialEditorState, setEssayState, handleEditorKeyUp }) => {
    
  const initialConfig = {
    editorState: initialEditorState,
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [
      HeadingNode,
      QuoteNode,
    ]
  }

  return (<ComponentWrapper>
            <ComponentHeader>
            <PublishButton><SendIcon /></PublishButton>
            {/* <PublishButton><BrainIcon /></PublishButton> */}

            </ComponentHeader>

            <ComponentBody>
              <LexicalComposer initialConfig={initialConfig}>
                <EditorContainer>
                  <RichTextPlugin
                    contentEditable={<ContentEditable onKeyUp={handleEditorKeyUp} className="editor-content" />}
                    placeholder={"Enter some text..."}
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                  <OnChangePlugin onChange={onChange} />
                  <HistoryPlugin />
                  <AutoFocusPlugin />
                  {/* <TreeViewPlugin /> */}
                  <UpdateLocalStoragePlugin setEssayState={setEssayState} handleEditorKeyUp={handleEditorKeyUp} />
                </EditorContainer>
              </LexicalComposer>
            </ComponentBody>
           
         </ComponentWrapper>)
}


export default LexicalEditor



const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: scroll;
  position: relative;
  // display: flex;
  // flex-direction: row-reverse;

  .editor-content {
    outline: none;
    font-family: Poppins, sans-serif;
  }
`


const EditorContainer = styled.div`
  h1 {
    font-size: 42px;
  }
`

const ComponentHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  justify-content: flex-end;
  align-items: flex-end;

  svg {
    fill: rgb(139, 61, 255);
    stroke: #fff;
    stroke-width: 10px;
    max-width: 30px;
    font-weight: 700;
    width: 100%;
  }

`
const ComponentBody = styled.div`
  padding: 50px 100px;

`

const PublishButton = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  margin: 10px 0;
  font-size: 18px;
  width: 100%;
  color: #fff;
  height: 40px;
  border-radius: 3px;
  background: rgb(139, 61, 255);
  max-width: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 20px 0px;
  border: 1px solid rgb(139, 61, 255);

  &:active {
    background: rgb(114,23,250);
    box-shadow: inset 0px 0px 5px #b9b9b9;
    outline: none;
  }


  svg {
    width: 100%;
    max-width: 20px;
    fill: #fff;
  }`