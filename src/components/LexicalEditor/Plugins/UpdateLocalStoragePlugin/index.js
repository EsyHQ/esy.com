import React, { useEffect } from 'react'
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { v4 as uuidv4 } from 'uuid'


const UpdateLocalStoragePlugin = ({ handleEditorKeyUp }) => {
    const [ editor ] = useLexicalComposerContext()
    const id = uuidv4() // Create Unique ID for New Essay


    useEffect(() => {
        const removeRootListener = editor.registerRootListener((rootElement, prevRootElement) => {
            // add the listener to the current root element
            rootElement && rootElement.addEventListener('keyup', handleEditorKeyUp)
            // remove the listener from the old root element - make sure the ref to myListener
            // is stable so the removal works and you avoid a memory leak.
            // prevRootElement.removeEventListener('onkeyup', handleEditorKeyUp)
        })
        
        return removeRootListener()
    }, [editor])

    return null
}

export default UpdateLocalStoragePlugin