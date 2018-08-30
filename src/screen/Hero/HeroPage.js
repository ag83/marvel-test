import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getHero, clearHero } from './actions';
import Loading from '../Common/components/Loading';
import Header from '../Common/components/Header';
import { logoutRequest } from '../Login/actions';

import './hero.pcss';

class HeroPage extends Component {
  componentDidMount() {
    if (!this.props.hero) {
      this.props.getHero(this.props.match.params.id);
      return;
    }

    if (this.props.hero && this.props.hero.id !== +this.props.match.params.id) {
      this.props.clearHero();
      this.props.getHero(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div className="mv-hero__container" >
        <Header {...this.props.user} logoutUser={this.props.logout} />
        {
          this.props.hero ? (
            <Fragment>
              <div className="mv-hero__image" >
                <img
                  src={`${this.props.hero.thumbnail.path}.${this.props.hero.thumbnail.extension}`}
                  alt={`${this.props.hero.name}`}
                />
              </div>
              <div className="mv-hero__info" >
                <h2 className="mv-hero__name" >
                  {this.props.hero.name}
                </h2>
                <div className="mv-hero__description">
                  {this.props.hero.description}
                </div>
                {
                  this.props.hero.comics.available > 0 ?
                    (
                      <div className="mv-hero__comics">
                        <div className="mv-hero__comics-number">
                          {`${this.props.hero.comics.available} comics`}
                        </div>
                        <ul className="mv-hero__comics-list">
                          {
                            this.props.hero.comics.items.map(item => (
                              <li key={item.name}>
                                <a className="mv-hero__comics-link" href={item.resourceURI}>{item.name}</a>
                              </li>
                              )
                            )
                          }
                        </ul>
                      </div>
                    )
                    : null
                }
              </div>
            </Fragment>
          ) : (
            <Loading loading />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hero: state.hero.hero,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getHero: id =>
    dispatch(getHero(id)),
  clearHero: () =>
    dispatch(clearHero()),
  logout: () =>
    dispatch(logoutRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);
