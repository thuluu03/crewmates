import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import Navbar from "../components/navbar/navbar";

const Edit = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [input, setInput] = useState({})    
    const [crewmate, setCrewmate] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await supabase
                                    .from('Posts')
                                    .select('*')
                                    .eq('id', params.id)
            
            setCrewmate(response.data[0])
        }
        fetchAPI()
    }, [submitted])
    
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
            .eq('id', params.id)
            .select()

        setSubmitted(!submitted)
    }

    const handleDelete = async () => {
        // submit delete request to server
        await supabase
                .from('Posts')
                .delete()
                .eq('id', params.id)
        navigate("/gallery")
    }

    const goBack = () => {
        navigate("/gallery")
    }

    return (
        <div className="page-container">
            <Navbar></Navbar>
            <div className="content">
                <button onClick={goBack}>Back</button>
                <h1>Edit Crewmate</h1>
                <div className='stats'>
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>speed</th>
                                <th>color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{crewmate !== null ? crewmate.name : "loading"}</td>
                                <td>{crewmate !== null ? crewmate.speed : "loading"}</td>
                                <td>{crewmate !== null ? crewmate.color : "loading"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                        <label><input type="radio" name="mate-color" value="black" onChange={(e) => handleInput("color", e.target.value)}></input>black</label>
                        <label><input type="radio" name="mate-color" value="white" onChange={(e) => handleInput("color", e.target.value)}></input>white</label>
                    </div>
                    <input type="submit"></input>
                </form>
                <button className='delete' onClick={handleDelete}> Delete </button>
            </div>
        </div>
    )
}

export default Edit;