import React, { Component } from 'react';

import Requisites from './Requisites';
import Card from './Card';
import './styles.less';

class MethodMoney extends Component {
  state = {
    selectedOption: 'rek'
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className='MethodMoney'>
        <p className='MethodMoney-text'>Способ получаения денег:</p>
        <div className='MethodMoney-container'>
          <label htmlFor="rek" className='MethodMoney-label'>
            <input type="radio" id='rek' value='rek' checked={ selectedOption === 'rek' } onChange={ this.handlerChange }/>
            Реквизиты
          </label>
          <label htmlFor="card" className='MethodMoney-label'>
            <input type="radio" id='card' value='card' checked={ selectedOption === 'card' } onChange={ this.handlerChange }/>
            Карта
          </label>
          <label htmlFor="moneyYandex" className='MethodMoney-label'>
            <input type="radio" id='moneyYandex' value='moneyYandex' checked={ selectedOption === 'moneyYandex' } onChange={ this.handlerChange }/>
            Яндекс деньги
          </label>
        </div>
        <div>
          { this.renderMethod(selectedOption) }
        </div>
      </div>
    )
  }

  renderMethod(name){
    switch (name){
      case 'rek':
        return <Requisites/>;
      case 'moneyYandex':
        return '';
      default:
        return <Card/>;
    }

  }

  handlerChange = (event) => {
    this.setState({ selectedOption: event.target.value })
  }
}

export default MethodMoney;