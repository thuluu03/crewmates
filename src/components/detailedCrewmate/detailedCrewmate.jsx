import { useEffect, useState } from "react";
import { supabase } from "../../client";

const DetailedCrewmate = ({ id }) => {
    const [crewmate, setCrewmate] = useState(null)

    useEffect(() => {
        const fetchMate = async () => {
            const response = await supabase
                                    .from('Posts')
                                    .select('*')
                                    .eq('id', id)
            
            const data = response.data
            setCrewmate(data)
            console.log(data)
        }
        fetchMate()
    }, [])

    return (
        <div>
            crewmate: 
            {id}
        </div>
    )
}

export default DetailedCrewmate;