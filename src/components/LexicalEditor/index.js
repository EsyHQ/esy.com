
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { $getRoot, $getSelection } from 'lexical'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'



// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
const onChange = (editorState) => {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot()
    const selection = $getSelection()

    console.log(root, selection)
  })
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
const MyCustomAutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus()
  }, [editor])

  return null
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
const onError = (error) => {
  console.error(error)
}

const LexicalEditor = () => {
    
  const initialConfig = {
    namespace: 'MyEditor',
    onError,
  }

  return (<ComponentWrapper>
            <LexicalComposer initialConfig={initialConfig}>
              <PlainTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={"Enter some text..."}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <OnChangePlugin onChange={onChange} />
              <HistoryPlugin />
              <MyCustomAutoFocusPlugin />
            </LexicalComposer>
         </ComponentWrapper>)
}


export default LexicalEditor


const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 100px;
`