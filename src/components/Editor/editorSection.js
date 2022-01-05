import React from 'react'
import styled from 'styled-components'

import DefaultElement from './defaultElement'
import CodeElement from './codeElement'

import { createEditor, Editor, Transforms, Text } from "slate"
import { Slate, Editable, withReact,  } from 'slate-react'

import BoldLeaf from './Leaves/boldLeaf'

import { isBoldMarkActive, isCodeBlockActive, toggleBoldMark, toggleCodeBlock } from 'src/modules/utils/editor'


const EditableSection = () => {
    const [value, setValue] = React.useState(
      JSON.parse(localStorage.getItem('content')) || [
        {
        type: 'paragraph',
        children: [{ text: 'Start typing.....' }],
      },
    ])

    const renderElement = React.useCallback(props => {
        switch (props.element.type) {
          case 'code':
            return <CodeElement {...props} />
          default:
            return <DefaultElement {...props} />
        }
      }, [])

    const renderBoldLeaf = React.useCallback(props => {
      return <BoldLeaf {...props} />
    }, [])

    const editor = React.useMemo(() => withReact(createEditor()), [])

    const onKeyDown = event => {
      if (!event.ctrlKey) {
        return
      }

      switch (event.key) {
        case "`": {
          event.preventDefault()
          toggleCodeBlock(editor)
          break
        }

        case 'b': {
          event.preventDefault()
          toggleBoldMark(editor)
          break
        }
      }
    }

    return (<SectionWrapper>
                <SectionTitle>Editor</SectionTitle>
                <Slate 
                  editor={editor} 
                  value={value} 
                  onChange={newValue => {
                    setValue(newValue)

                    const isAstChange = editor.operations.some(
                      op => 'set_selection' !== op.type
                    )
                    if (isAstChange) {
                      // Save the value to Local Storage.
                      const content = JSON.stringify(value)
                      localStorage.setItem('content', content)
                    }
                  }}
                >
                  <div>
                    <button
                      onMouseDown={event => {
                        event.preventDefault()
                        toggleBoldMark(editor)
                      }}
                    >
                      Bold
                    </button>

                    <button
                      onMouseDown={event => {
                        event.preventDefault()
                        toggleCodeBlock(editor)
                      }}  
                    >
                      Code Block
                    </button>
                  </div>
                    <Editable
                      editor={editor}
                      renderElement={renderElement}
                      renderLeaf={renderBoldLeaf}
                      onKeyDown={onKeyDown}
                    />
                </Slate>
            </SectionWrapper>
    )
}


export default EditableSection


const SectionWrapper = styled.div``


const SectionTitle = styled.h1`
  font-size: 36px;
`

const SectionParagraph = styled.p`
  font-size: 23px;

  @media(max-width: 600px) {
    font-size: 18px;
  }
`