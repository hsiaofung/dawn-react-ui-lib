import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Select extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {   

    return (
        <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
      </select>
    )
  }
}
