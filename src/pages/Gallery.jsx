import Navbar from "../components/navbar/navbar";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import Crewmate from "../components/crewmate/crewmate";

const Gallery = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await supabase
                                .from("Posts")
                                .select("*");
            setCrewmates(response.data.sort((a, b) => (a.created_at < b.created_at ? 1 : -1)))
        }
        fetchData()
    }, [])

    const NoData = () => {
        return (
            <div>
                ...No Crewmates
            </div>
        )
    }

    const Display = () => {
        return (
            <div>
                {crewmates.map((crewmate, index) => (
                    <Crewmate
                        key={index}
                        id={crewmate.id}
                        name={crewmate.name}
                        color={crewmate.color}
                        speed={crewmate.speed}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className="page-container">
            <Navbar></Navbar>
            <div className="content">
                <h1>GALLERY</h1>
                { crewmates.length == 0 ? <NoData/> : <Display/> }
            </div>
        </div>
    );
};

export default Gallery;
