
import { $getRoot, $getSelection } from 'lexical'


// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.

const onError = (error) => {
    console.log(error)
}


// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
const onChange = (editorState) => {

    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot()
      const selection = $getSelection()
    })
  }

  


export default {
    onError,
    onChange
}