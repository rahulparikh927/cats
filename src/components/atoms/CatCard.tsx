import { Link } from "react-router-dom";
import { Cat } from "../../model/cat.model";

type Props = {
  cat: Cat;
};

const CatCard = ({ cat }: Props) => {
  return (
    <div className="gridItem">
      <Link to={`/cat-breed/${cat.breeds[0].id}`} state={{ cat }}>
        <div className="gridItemImage">
          <img className="catImage" src={cat.url} alt={cat.id} />
        </div>
        <div className="gridItemBody">
          <p>{cat.breeds[0].name}</p>
        </div>
      </Link>
    </div>
  );
};

export default CatCard;
