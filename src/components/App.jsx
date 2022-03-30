import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNewNote(note) {
        setNotes(prevNotes => [...prevNotes, note]);
    }

    function deleteNote(id){
        setNotes(prevNotes =>
            prevNotes.filter((note, index) => index !== id));
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNewNote}/>
            <div>
                {notes.map((note, index) =>
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
