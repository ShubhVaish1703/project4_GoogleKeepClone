import React from 'react'
import Card from './Card'

const Cards = (props) => {
  
  return (
    <div className='cards'>
     { (props.addItem).map((value,index)=>{
        return <Card key={index} id={index} title = {value.title} content={value.content} deleteNote={props.deleteNote}/>
      })}
    </div>
  )
}

export default Cards
