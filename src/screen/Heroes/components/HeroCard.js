import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { HERO } from '../../../router';

class HeroCard extends Component {
  render() {
    return (
      <article className="mv-hero-card">
        <Link href={`${HERO}/${this.props.id}`} to={`${HERO}/${this.props.id}`}>
          <div className="mv-hero-card__avatar">
            <img
              src={`${this.props.thumbnail.path}.${this.props.thumbnail.extension}`}
              alt={`${this.props.name} thumbnail`}
            />
          </div>
          <div className="mv-hero-card__hero-info">
            <div className="mv-hero-card__hero-name">
              {this.props.name}
            </div>
            <div className="mv-hero-card__hero-description">
              {this.props.description}
            </div>
          </div>
        </Link>
      </article>
    );
  }
}

export default HeroCard;
