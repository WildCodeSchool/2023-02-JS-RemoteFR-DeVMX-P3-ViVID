import PropTypes from "prop-types";
import Grid from "../components/videosDisplay/Grid";
import "./category.scss";

export default function Category({ category }) {
  return (
    <div className="flexContainer">
      <section className="body">
        <Grid category={category} />
      </section>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.number.isRequired,
};
