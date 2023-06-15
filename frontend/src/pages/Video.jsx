import vid from "../assets/videos/white-city.jpg";

export default function Video() {
  return (
    <div className="video">
      <img src={vid} alt="" />
      <div className="buttons">
        <button type="button">
          <i>icone</i>
        </button>
        <button type="button">
          <i>icone</i>
        </button>
      </div>
    </div>
  );
}
