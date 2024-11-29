import Star from "../Star";
import './index.css'

const Stars = ({rating = 0}) => {

    if (rating < 1 || rating > 5 || typeof rating !== 'number') return null;

    const stars = Array.from({ length: rating }, () => <Star />);

    return (
        <ul className="card-body-stars u-clearfix">
            {stars.map((star, index) => <li key={index}>{star}</li>)}
        </ul>
    );
};

export default Stars;