import React from 'react'

const ShowInput = (props) => {
  return (
    <div className="show_input" onClick={props.disablefunction}>
      <span>Write a note...</span>
    </div>

  )
}

export default ShowInput
