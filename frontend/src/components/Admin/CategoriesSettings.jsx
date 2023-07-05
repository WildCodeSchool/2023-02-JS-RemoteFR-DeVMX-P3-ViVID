import PropTypes from "prop-types";

import "./categoriesSettings.scss";

export default function FieldSetting({ tab }) {
  return <div>{tab}</div>;
}

FieldSetting.propTypes = {
  tab: PropTypes.number.isRequired,
};
