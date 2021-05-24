import './style.css';

function Navbar({ handleTcgSet }) {
  function onClick(event) {
    handleTcgSet('set.id:' + event.target.id);
  }
  return (
    <div className="Navbar">
      <h1>Pokémon TCG Dex</h1>
      <div>
        <p>
          <a id="base1" href="#" onClick={onClick}>
            Base
          </a>
          <a id="base2" href="#" onClick={onClick}>
            Jungle
          </a>
          <a id="base3" href="#" onClick={onClick}>
            Fossil
          </a>
          <a id="base5" href="#" onClick={onClick}>
            Team Rocket
          </a>
          <a id="gym1" href="#" onClick={onClick}>
            Gym Heroes
          </a>
          <a id="gym2" href="#" onClick={onClick}>
            Gym Challenge
          </a>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
