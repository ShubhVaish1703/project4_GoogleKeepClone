import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Card = (props) => {
    const deleteNote=()=>{
        props.deleteNote(props.id)
    }
    return (
        <div className='card_main_div'>
            <div className="card_title">{props.title} </div>
            <div className="card_content">{props.content}</div>
            <div className='delete_icon' onClick={deleteNote}><DeleteIcon /></div>
        </div>
    )
}

export default Card