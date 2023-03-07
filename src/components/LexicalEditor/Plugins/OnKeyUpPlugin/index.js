import React, { useLayoutEffect } from 'react'

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"



const OnKeyUpPlugin = () => {
    const [editor]= useLexicalComposerContext()
   
    const handleEditorKeyUp = () => {
        console.log('Hey')
    }
    
    useLayoutEffect(() => {

        return editor.registerRootListener((rootElement, prevRootElement) => {
            if (prevRootElement !== null) {
                prevRootElement.removeEventListener('keyup', handleEditorKeyUp)
            }
    
            if (rootElement !== null) {
                rootElement.addEventListener('keyup', handleEditorKeyUp)
            }
        })

    }, [editor])

    return null
}


export default OnKeyUpPlugin