import React, { useRef } from 'react'
import styled from 'styled-components'
import { Editor } from '@tinymce/tinymce-react';


const TinyEditor = () => {
    const EditorAPIKey = process.env.GATSBY_TINY_MCE_API_KEY
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    }

    return (<TinyEditorWrapper>
                  <Editor
                    apiKey={EditorAPIKey}
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>Start here...</p>"
                    init={{
                    height: '100%',
                    resize: false,
                    menubar: false,
                    border: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat',
                    content_css: 'default',
                    content_style: 'body { "Roboto","Helvetica","Arial",sans-serif; font-size:14px }, textarea { resize: none}'
                    }}
                  />
                    {/* <button onClick={log}>Log editor content</button> */}

            </TinyEditorWrapper>)
}

export default TinyEditor



const TinyEditorWrapper = styled.div`
    height: 100%;
    width: 100%;

    textarea {
        resize: none;
    }

`