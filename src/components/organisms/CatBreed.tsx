import { useLocation, useNavigate } from "react-router-dom";
import { Cat } from "../../model/cat.model";

const CatBreed = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const cat = state.cat as Cat;

  return (
    <div className="catBreedDetails">
      <div className="header">
        <h3>{`${cat.breeds[0].name} Details`}</h3>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="columnGrid">
        <div>Breed Name :</div>
        <div>{cat.breeds[0].name}</div>
        <div>Temperament :</div>
        <div>{cat.breeds[0].temperament}</div>
        <div>Life span :</div>
        <div>{cat.breeds[0].life_span}</div>
        <div>Weight :</div>
        <div>{`${cat.breeds[0].weight.metric} Matric`}</div>
      </div>
    </div>
  );
};

export default CatBreed;
