import React from 'react'
import { TextEditor } from '../../ui/TextEditor'

const SysSimulation = ({ classes, editorState, setEditorState }) => {
  return (
    <>
      <TextEditor
        editorState={editorState}
        setEditorState={setEditorState}
        toolbarClass={classes.toolbarClass}
        buttonClass={classes.buttonClass}
        editorClass={classes.editorClass}
      />
    </>
  )
}

export default SysSimulation