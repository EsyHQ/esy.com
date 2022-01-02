import React from 'react'
import styled from 'styled-components'

import DefaultElement from 'src/components/Editor/defaultElement'
import CodeElement from 'src/components/Editor/codeElement'

import { createEditor, Editor, Transforms } from "slate"
import { Slate, Editable, withReact } from 'slate-react'


const EditableSection = () => {
    const [value, setValue] = React.useState([
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

    return (<SectionWrapper>
                <SectionTitle>Editor</SectionTitle>
                <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
                    <Editable
                        renderElement={renderElement}
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