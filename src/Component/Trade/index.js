import React, { Component } from 'react';

import { em } from '../../utils/isValidation';

import './styles.less';


class Trade extends Component {
  state = {
    focus: false,
    name: '',
    email: '',
    error: {
      emailError: false
    }
  };

  render() {
    const { name, email, focus } = this.state;
    let input = 'Trade-input';

    if(focus) {
      input = `${ input } ${ input }--active`;
    }

    return(
      <div className='Trade'>
        <h1 className='Trade-title'>{name}</h1>
        <div className='Trade-container'>
          <p className='Trade-text'>Тип сделки</p>
          <select className='Trade-select'>
            <option value="">Товар</option>
            <option value="">Услуги</option>
          </select>
        </div>
        <div className='Trade-container'>
          <p className='Trade-text'>Название</p>
          <input type="text" name='name' className={input} value={name} { ...this.propsInput }/>
        </div>
        <div className='Trade-container'>
          <p className='Trade-text'>Описание сделки</p>
          <textarea name="" id="" cols="30" rows="10"/>
        </div>
        <div className='Trade-container'>
          <p className='Trade-text'>Я выступаю как:</p>
          <div className='Trade-container-radio'>
            <div>
              <input type="radio" name='client' id='Seller' value='Seller'/>
              <label htmlFor="Seller">Продавец</label>
            </div>
            <div>
              <input type="radio" name='client' id='Buyer' value='Buyer'/>
              <label htmlFor="Buyer">Покупатель</label>
            </div>
          </div>
        </div>
        <div className='Trade-container'>
          <p className='Trade-text'>Е-mail покупателя</p>
          <input type="email" name='email' className={input} value={email}  { ...this.propsInput }/>
        </div>
      </div>
    )
  }

  onChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    this.setState({ [ name ]: value });
  };

  focus = () => {
    this.setState({ focus: true })
  };

  blur = (event) => {
    const { email } = this.state;
    const type = event.target.type;
    if(type === 'email') {
      if(em.test(email) && email.length > 0){
        this.setState({ error: { email: true } })
      }
    }
    this.setState({ focus: false })
  };

  propsInput = {
    onBlur: this.blur,
    onFocus: this.focus,
    onChange: this.onChange
  };
}

export default Trade;