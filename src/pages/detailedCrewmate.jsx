import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import details from "../data/crewDescription";

const DetailedCrewmate = ({ id }) => {
  const [crewmate, setCrewmate] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMate = async () => {
      const response = await supabase.from("Posts").select("*").eq("id", id);

      const data = response.data;
      setCrewmate(data[0]);
      console.log(data);
    };
    fetchMate();
  }, []);

  const goBack = () => {
    navigate("/gallery")
  }

  return (
    <div className="page-container">
      <div className="content">
        <h1>Crewmate: {id}</h1>
        <div className="image-container">
            <img src={details.images[crewmate?.color]} />
        </div>
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
        <div className="description">
            {details.speed[crewmate?.speed]}
        </div>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  );
};

export default DetailedCrewmate;
