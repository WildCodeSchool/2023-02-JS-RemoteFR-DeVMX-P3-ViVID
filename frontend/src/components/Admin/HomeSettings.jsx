import PropTypes from "prop-types";

import "./homeSettings.scss";

export default function HomeSetting({ tab, categories }) {
  return (
    <div>
      {tab}
      {categories.map((category) => (
        <p>{category}</p>
      ))}
    </div>
  );
}

HomeSetting.propTypes = {
  tab: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};
