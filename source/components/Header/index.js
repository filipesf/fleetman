import React from 'react';
import bg from './assets/header-bg.svg';
import trucks from './assets/trucks.png';
import './assets/header.scss';

import Headline from '../Headline';
import Block from '../../containers/Block';

const Header = props => {
  return (
    <header className="site-header" style={{backgroundImage: 'url('+ bg +')'}}>
      <div className="container">
        <section className="section">
          <Headline
            title="Entregamos qualquer coisa em qualquer lugar"
            subtitle="Atendemos entregas de mercadorias, cargas, móveis e mudanças."
            modifier="header"
          />
          <figure className="image">
            <img src={trucks} alt="Trucks" />
          </figure>
        </section>
        <section className="section">
          <Block shadow={true} radius={true}></Block>
        </section>
      </div>
    </header>
  );
}

export default Header;