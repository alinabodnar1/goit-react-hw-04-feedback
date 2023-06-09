import React from 'react';
import PropTypes from "prop-types";

export default function Notification({ message }) {
  return (
    <h2 style={{color: "red"}}>{message}</h2>
  )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}