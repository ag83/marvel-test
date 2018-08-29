import React from 'react';
import { Link } from 'react-router-dom';

import { HOME } from '../../../router';

import './header.pcss';
import logo from '../../../img/logo-marvel.png';
import defaultAvatar from '../../../img/defaultAvatar.png';

export default function Header(props) {
  return (
    <header className="mv-header">
      <div className="mv-header__wrapper">
        <Link href={HOME} to={HOME}>
          <img
            className="mv-header__logo"
            alt="marvel logotype"
            src={logo}
          />
        </Link>
        <div className="mv-header__user">
          <div className="mv-header__avatar">
            <img
              alt={`${props.user.photoURL} avatar`}
              src={props.user.photoURL ? props.user.photoURL : defaultAvatar}
            />
          </div>
          <div className="mv-header__user-menu" >
            <div className="mv-header__user" >{props.user.displayName ? props.user.displayName : props.user.email ? props.user.email : 'Anonimous'}</div>
            <button
              onClick={props.logoutUser}
              className="mv-header__logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
