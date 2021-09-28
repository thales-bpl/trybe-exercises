import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Pokemon extends React.Component {

  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.digimon;

    return (
      <section className='container-pokemon'>
        <h2>{ name }</h2>
        <p>Tipo: { type }</p>
        <p>Seu peso é { value } { measurementUnit }</p>
        <img src={ image } alt={`Imagem do Pokemon ${name}`}></img>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired
  }).isRequired
}

export default Pokemon;
