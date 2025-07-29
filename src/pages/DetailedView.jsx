import DetailedCrewmate from "../components/detailedCrewmate/detailedCrewmate";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

const DetailedView = () => {
    const params = useParams()

    return (
        <div className="page-container">
            <Navbar />
            <div className="content">
                <DetailedCrewmate id={params.id} />
            </div>
        </div>

    )
}

export default DetailedView;