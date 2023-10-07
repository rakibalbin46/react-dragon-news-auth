import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardNews = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card card-compact mb-16">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link className="text-blue-500 font-semibold" to={`/news/${_id}`}>
              Read more...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default CardNews;

CardNews.propTypes = {
  news: PropTypes.node,
};
