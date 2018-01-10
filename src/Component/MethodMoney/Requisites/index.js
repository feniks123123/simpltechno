import React, { Component } from 'react';

import { validateBik, validateInn, validateKpp, validateKs } from './../../../utils/isValidation';

import './styles.less';

class Requisites extends Component {
  state = {
    name: '',
    bik : '',
    account: '',
    corr: '',
    beneName: '',
    inn: '',
    kpp: '',
    bank: '',
    error: {
      nameError: false,
      bikError : false,
      accountError: false,
      corrError: false,
      beneNameError: false,
      innError: false,
      kppError: false,
      bankError: false,
    }
  };
  render() {
    const {
      name, bik, account, corr, beneName, inn, kpp, bank,
      error: {
        nameError,
        bikError ,
        accountError,
        corrError,
        beneNameErro,
        innError,
        kppError,
        bankError
      }
    } = this.state;
    console.log(bikError);
    return (
      <div className='Requisites'>
        <div className='Requisites-container'>
          <p className='Requisites-text'>Наименование <span>{ name }</span></p>
          <input type="text" name='name' value={name} { ...this.propsInput }/>
          <p className='Requisites-error'>{nameError}</p>
        </div>
        <div className='Requisites-container'>
          <p className='Requisites-text'>Бик <span>{ bik }</span></p>
          <input type="text" name='bik' value={bik} { ...this.propsInput }/>
          <p className='Requisites-error'>{bikError}</p>
        </div>
        <div className='Requisites-container'>
          <p className='Requisites-text'>Лицевой счет <span>{ account }</span></p>
          <input type="text" name='account' value={account} { ...this.propsInput }/>
          <p className='Requisites-error'>{accountError}</p>
        </div>
        <div className='Requisites-container'>
          <p className='Requisites-text'>Корр.счет <span>{ corr }</span></p>
          <input type="text" name='corr' value={corr} { ...this.propsInput }/>
          <p className='Requisites-error'>{corrError}</p>
        </div>
        <div className='Requisites-container'>
          <p className='Requisites-text'>Имя получателя платежа <span>{ beneName }</span></p>
          <input type="text" name='beneName' value={beneName} { ...this.propsInput }/>
          <p className='Requisites-error'>{beneNameErro}</p>
        </div>
        <div className='Requisites-container'>
          <p className='Requisites-text'>ИНН <span>{ inn }</span></p>
          <input type="text" name='inn' value={inn} { ...this.propsInput }/>
          <p className='Requisites-error'>{innError}</p>
        </div>
        <div className='Requisites-container'>
          <p className='Requisites-text'>КПП <span>{ kpp }</span></p>
          <input type="text" name='kpp' value={kpp} { ...this.propsInput }/>
          <p className='Requisites-error'>{kppError}</p>
        </div>
        <div className='Requisites-container'>
          <p className='Requisites-text'>БАНК <span>{ bank }</span></p>
          <input type="text" name='bank' value={bank} { ...this.propsInput }/>
          <p className='Requisites-error'>{bankError}</p>
        </div>
      </div>
    )
  }

  handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    this.setState({ [ name ]: value });

    // this.setState({ error: {
    //     [`${name}Error`] : validateBik(value),
    //     [`${name}Error`] : validateInn(value),
    //     [`${name}Error`] : validateKpp(value),
    //     [`${name}Error`] : validateKs(value, this.state.bik),
    //   }});
  };

  /*blur = (event) => {
  };*/

  propsInput = {
    onBlur: this.blur,
    onFocus: this.focus,
    onChange: this.handleChange,
  }
}

export default Requisites;