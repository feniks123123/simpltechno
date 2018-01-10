import React, { Component } from 'react';

import './styles.less';

class Card extends Component {
  state = {
    card: '',
    name: '',
    date: ''
  };

  render() {
    const { card, name, date } = this.state;

    return (
      <div className='Card'>
        <div className='Card-container'>
          <p className='Card-text'>Карта <span>{ this.replaceRange(card, 4, 8, " **** **** ") }</span></p>
          <input type="text" name='card' maxLength='12' value={ card } { ...this.propsInput }/>
        </div>
        <div className='Card-container'>
          <p className='Card-text'>Имя <span>{ name }</span></p>
          <input type="text" name='name' value={ name } { ...this.propsInput }/>
        </div>
        <div className='Card-container'>
          <p className='Card-text'>Дата <span>{ date }</span></p>
          <input type="text" name='date' value={ date } { ...this.propsInput }/>
        </div>
      </div>
    )
  }

  replaceRange = (str, start, end, substitute) => {
    return str.substring(0, start) + substitute + str.substring(end);
  };

  handlerChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  propsInput = {
    onBlur: this.blur,
    onFocus: this.focus,
    onChange: this.handlerChange
  }
}

export default Card;