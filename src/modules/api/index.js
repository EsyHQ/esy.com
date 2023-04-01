export const updateEssayById = (id, editorState) => {
    const essays = fetchAllEssays()
    essays[id]["content"] = editorState // Should merge this.

    // saveEditorSt3  ateToLocalStorage(essays)
  }


export const fetchEssayById = (id) => {
    const essays = fetchLocalStorage('essays')
    const parsedEssays = JSON.parse(essays)
    const essay = parsedEssays[id]

    return essay
  }


export const fetchAllEssays = () => {
    const essays = fetchLocalStorage('essays')
    const parsedEssays = JSON.parse(essays)

    return parsedEssays
  }


export const fetchLocalStorage = (key) => {
  return window && window.localStorage.getItem(key)
}
