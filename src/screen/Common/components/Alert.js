import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
  return props.messages.length ? (
    <ul className="mv-messages">
      {props.messages.map(message => <li key={message.id} className={`mv-message mv-message--${message.type}`}>{message.text}</li>)}
    </ul>
  ) : null;
}

Alert.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string
  }))
};
Alert.defaultProps = {
  messages: []
};
