import "./CharacterCard.css";
import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
  const { name, image, status, species, location, origin } = character;
  console.log(character);
  console.log("hola");

  return (
    <article className="characterCard">
      <div className="characterImagen">
        <img src={image} alt="Image of the character" />
      </div>
      <div className="characterContent">
        <div className="section">
          <h2>{name}</h2>
          <span className="status">
            <span className={`status__icon status__${status}`}></span>
            {status} - {species}
          </span>
        </div>
        <div className="section">
          <span className="text-gray">Last known location:</span>
          <a href={location.url}>{location.name}</a>
        </div>
        <div className="section">
          <span className="text-gray">Origin:</span>
          <a href={origin.url}>{origin.name}</a>
        </div>
      </div>
    </article>
  );
};

CharacterCard.propTypes = {
  /**
   * Character object
   */
  character: PropTypes.shape({
    /**
     * The name of the character
     */
    name: PropTypes.string.isRequired,
    /**
     * The image of the character
     */
    image: PropTypes.string.isRequired,
    /**
     * The status of the character
     */
    status: PropTypes.string.isRequired,
    /**
     * The species of the character
     */
    species: PropTypes.string.isRequired,
    /**
     * The location of the character
     */
    location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
  }).isRequired,
    /**
     * The origin of the character
     */
    origin: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
};

export default CharacterCard;
