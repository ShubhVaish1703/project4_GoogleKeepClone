import React from 'react'
import AddIcon from '@mui/icons-material/Add';
const InputData = (props) => {
  
  

  return (
    <div className='main_input' onDoubleClick={props.enablefunction}>
        <input  className='title_input' type="text" value={props.note.title} onChange={props.InputDataEvent} placeholder='Title' name='title'/>
        <textarea className='content_input' placeholder='Write a note...' value={props.note.content} onChange={props.InputDataEvent} name='content'></textarea>
          <div className='add_icon' onClick={props.addItemEvent}><AddIcon /></div>
    </div>
  )
}

export default InputData;
