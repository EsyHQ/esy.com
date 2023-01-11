
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

import 'src/styles/editor/index.scss'
 
import initialEditorState from './initialEditorState'
import { Publish } from '@mui/icons-material'
import SendIcon from 'src/svg/send.svg'
import BrainIcon from 'src/svg/brain.svg'



const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
  quote: 'editor-quote',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    h5: 'editor-heading-h5',
    h6: 'editor-heading-h6',
  },
  list: {
    nested: {
      listitem: 'editor-nested-listitem',
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
    listitem: 'editor-listitem',
  },
  image: 'editor-image',
  link: 'editor-link',
  text: {
    bold: 'editor-text-bold',
    italic: 'editor-text-italic',
    overflowed: 'editor-text-overflowed',
    hashtag: 'editor-text-hashtag',
    underline: 'editor-text-underline',
    strikethrough: 'editor-text-strikethrough',
    underlineStrikethrough: 'editor-text-underlineStrikethrough',
    code: 'editor-text-code',
  },
  code: 'editor-code',
  codeHighlight: {
    atrule: 'editor-tokenAttr',
    attr: 'editor-tokenAttr',
    boolean: 'editor-tokenProperty',
    builtin: 'editor-tokenSelector',
    cdata: 'editor-tokenComment',
    char: 'editor-tokenSelector',
    class: 'editor-tokenFunction',
    'class-name': 'editor-tokenFunction',
    comment: 'editor-tokenComment',
    constant: 'editor-tokenProperty',
    deleted: 'editor-tokenProperty',
    doctype: 'editor-tokenComment',
    entity: 'editor-tokenOperator',
    function: 'editor-tokenFunction',
    important: 'editor-tokenVariable',
    inserted: 'editor-tokenSelector',
    keyword: 'editor-tokenAttr',
    namespace: 'editor-tokenVariable',
    number: 'editor-tokenProperty',
    operator: 'editor-tokenOperator',
    prolog: 'editor-tokenComment',
    property: 'editor-tokenProperty',
    punctuation: 'editor-tokenPunctuation',
    regex: 'editor-tokenVariable',
    selector: 'editor-tokenSelector',
    string: 'editor-tokenSelector',
    symbol: 'editor-tokenProperty',
    tag: 'editor-tokenProperty',
    url: 'editor-tokenOperator',
    variable: 'editor-tokenVariable',
  }
}

const LexicalEditor = () => {
    
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
                    contentEditable={<ContentEditable className="editor-content" />}
                    placeholder={"Enter some text..."}
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                  <OnChangePlugin onChange={onChange} />
                  <HistoryPlugin />
                  <AutoFocusPlugin />
                  {/* <TreeViewPlugin /> */}
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
  }


  svg {
    width: 100%;
    max-width: 20px;
    fill: #fff;
  }`