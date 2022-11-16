import React, { useState } from 'react'
import InputData from './InputData'
import ShowInput from './ShowInput'
import Card from './Card'

const Home = () => {
    
    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    const [addItem, setAddItem] = useState([]);
    const [showInput, setShowInput] = useState(false)
    const disableMainInput = () => {
        setShowInput(true);
    }
    const enableMainInput = () => {
        setShowInput(false);
    }

    const addItemEvent = () => {
        setAddItem((prevData) => {
            if (note.title.length > 0 && note.content.length > 0) {
                return [...prevData, note]
            }
            else{
                return [...prevData]
            }
        })
        setNote({
            title: '',
            content: ''
        })
    }
    function deleteNote(id){
        setAddItem((oldData)=>{
            return oldData.filter((value,index)=>{
                return index !== id;
            })
        })
        
    }
    const InputDataEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNote((prevData) => {
            return { ...prevData, [name]: value }
        })
    }
    return (
        <div className='home'>
            <div className="main">
                {
                    showInput ? <InputData enablefunction={enableMainInput}
                        InputDataEvent={InputDataEvent} addItemEvent={addItemEvent} note={note}
                    />
                        : <ShowInput disablefunction={disableMainInput} />
                }
            </div>
            <h2 className='notes_heading'>Your Notes</h2>
            <div className='cards'>
                {addItem.map((value, index) => {
                    return <Card key={index} id={index} title={value.title} content={value.content} deleteNote={deleteNote} />
                })}
            </div>

        </div>
    )
}

export default Home
