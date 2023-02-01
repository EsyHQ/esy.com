import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid'
import { useBeforeunload } from 'react-beforeunload'
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"


import Layout from "src/components/Author/Layout"
import LexicalEditor from 'src/components/LexicalEditor'
import initialEditorState from 'src/components/LexicalEditor/initialEditorState'



const ComposePage = ({ location }) => {
  const [essayId, setEssayId] = useState('lsdafkja;ldkfj')
  const [essayState, setEssayState] = useState(null)
  const [publishedDate, setPublishedDate] = useState(null)
  const [essayLastSavedTime, setEssayLastSavedTime] = useState(null)
  const [pendingStorageSave, setPendingStorageSave] = useState(false)

  // const [ editor ] = useLexicalComposerContext()

  const fetchLocalStorage = (key) => {
    window.localStorage.getItem(key)
  }

  async function handleEditorKeyUp(event) {
      event.preventDefault()


      try {
        if (essayId) {
          const previousEditorState = fetchEssayById(essayId)

          console.log('prevEditorState', previousEditorState)
        } 
      } catch (error) {
        console.log(error, 'error')
      }
  }

  const updateEssayById = (id, editorState) => {
    const essays = fetchAllEssays()
    essays[id]["content"] = editorState // Should merge this.

    // saveEditorStateToLocalStorage(essays)
  }


  const fetchEssayById = (id) => {
    const essays = fetchLocalStorage('essays')
    const parsedEssays = JSON.parse(essays)
    const essay = parsedEssays[id]

    return essay
  }

  const fetchAllEssays = () => {
    const essays = fetchLocalStorage('essays')
    const parsedEssays = JSON.parse(essays)

    return parsedEssays
  }


  useBeforeunload((event) => {
    event.preventDefault()

    fetchLocalStorage('essays')

    // Compare currentEditorState with prevEditorState
    // if there is a difference
    // prompt user
    // else 
    // do not prompt user
    // 

    return 'Sure, you want to leave?'
  })


  useEffect(() => {
   
    const essays = window && window.localStorage && window.localStorage.getItem('essays')

      // if (essays) {
      //   return null

      // } else {
      //   const id = uuidv4()
      //   const essayState = editor.getEditorState()
      //   const serializedEditorState = JSON.stringify(essayState)
    
    
      //   const essay = {
      //     id,
      //     content: serializedEditorState,
      //     publishedDate: null,
      //     essayLastSavedTime: null,
      //   }

      //   window && window.localStorage && window.localStorage.setItem('essays', essay)
      // }

  })

    return (<PageWrapper>
              <Layout pageTitle="Compose">
                  <SectionWrapper>
                    <LexicalEditor 
                      initialEditorState={initialEditorState}
                      setEssayState={setEssayState}
                      handleEditorKeyUp={handleEditorKeyUp}
                    />
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default ComposePage



const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  main {
    padding-top: 0;
  }
`

const WritePageContainer = styled.div`
    // display: flex;
    flex: 1;
    margin: 0 auto;
    color: #fff; 
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    font-family: 'sans-serif';
    height: 100%;
    background: #fff;
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
  align-items: center;
  width: 100%;
  height: 100%;
`

const SidebarContainer = styled.div`
  background: #000;
  width: 100%;
`
const SidebarNav = styled.nav``

const SidebarList = styled.ul``

const SidebarListItem = styled.li``
