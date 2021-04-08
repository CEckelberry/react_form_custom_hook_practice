import React, {useState} from "react";
import useFields from "./hooks/useFields"
import useToggleState from './hooks/useToggleState'

const MadLibForm = () => {
    const [formData, handleChange, resetForm] = useFields({
        noun1: "",
        noun2: "",
        adjective: "",
        color: ""
    })

    const[isShowing, toggleIsShowing] = useToggleState(true);

    let madLibSentence = `There was a ${formData.color} ${formData.noun1} who loved a ${formData.adjective} ${formData.noun2}`

    const handleSubmit = e => {
        //alert("made it to handleSubmit")
        toggleIsShowing()
        e.preventDefault();
        //resetForm();
    }
    return (
    <div>
        <div>{isShowing?
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="noun1"
                    value={formData.noun1}
                    onChange={handleChange}
                    placeholder="noun"
                />
                <input 
                    type="text"
                    name="noun2"
                    value={formData.noun2}
                    onChange={handleChange}
                    placeholder="noun2"
                />
                <input 
                    type="text"
                    name="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                    placeholder="adjective"
                />
                <input 
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    placeholder="color"
                />
                <button>Get Story</button>
            </form>
            : null}
        </div>
        <h2>{isShowing? null : madLibSentence}</h2>
    </div>
    )
}

export default MadLibForm;