import React , { useState } from "react";

function CreateArea(props) {
    const initNote = {
        title: "",
        content: ""
    }
    const [note, setNote] = useState(initNote);

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {...prevNote, [name]: value}
        })
    }


    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
                <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
                <button onClick={()=>{
                    props.onAdd(note);
                    setNote(initNote);
                }}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
