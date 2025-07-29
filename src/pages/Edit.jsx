import { useState } from 'react';
import { Navigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import Navbar from "../components/navbar/navbar";

const Edit = () => {
    const params = useParams()
    // make the form to edit
    const [input, setInput] = useState({})
    
    const handleInput = (key, value) => {
        setInput(
            {
                ...input,
                [key]: value,
            }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await supabase
            .from('Posts')
            .update(input)
            .select("*")
            .eq('id', params.id)
        
        console.log(input)
    }

    const handleDelete = () => {
        // submit delete request to server
    }

    return (
        <div className="page-container">
            <Navbar></Navbar>
            <div className="content">
                Edit Crewmate
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" onChange={(e) => handleInput("name", e.target.value)}></input>
                    </label>
                    <label>
                        Speed:
                        <input type="number" onChange={(e) => handleInput("speed", e.target.value)}></input>
                    </label>
                    <div className="color-select">
                        Color:
                        <label><input type="radio" name="mate-color" value="red" onChange={(e) => handleInput("color", e.target.value)}></input>red</label>
                        <label><input type="radio" name="mate-color" value="orange" onChange={(e) => handleInput("color", e.target.value)}></input>orange</label>
                        <label><input type="radio" name="mate-color" value="yellow" onChange={(e) => handleInput("color", e.target.value)}></input>yellow</label>
                        <label><input type="radio" name="mate-color" value="green" onChange={(e) => handleInput("color", e.target.value)}></input>green</label>
                        <label><input type="radio" name="mate-color" value="mint" onChange={(e) => handleInput("color", e.target.value)}></input>mint</label>
                        <label><input type="radio" name="mate-color" value="purple" onChange={(e) => handleInput("color", e.target.value)}></input>purple</label>
                        <label><input type="radio" name="mate-color" value="brown" onChange={(e) => handleInput("color", e.target.value)}></input>brown</label>
                        <label><input type="radio" name="mate-color" value="gray" onChange={(e) => handleInput("color", e.target.value)}></input>gray</label>
                    </div>
                    <input type="submit"></input>
                </form>
                <button onClick={handleDelete} />
            </div>
        </div>
    )
}

export default Edit;