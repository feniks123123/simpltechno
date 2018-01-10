import React, { Component } from 'react';

import './styles.less';

class Trade extends Component {
  render() {
    return(
      <div className='Trade'>
        <div>
          <p>Тип сделки</p>
          <select name="" id="">
            <option value="">Товар</option>
            <option value="">Услуги</option>
          </select>
        </div>
        <div>
          <p>Название</p>
          <input type="text"/>
        </div>
        <div>
          <p>Описание сделки</p>
          <textarea name="" id="" cols="30" rows="10"/>
        </div>
        <div>
          <p>Я выступаю как:</p>
          <div>
            <input type="radio" id='saler' value='saler'/>
            <label htmlFor="saler">Продавец</label>
          </div>
          <div>
            <input type="radio" id='custumer' value='custumer'/>
            <label htmlFor="custumer">Покупатель</label>
          </div>
        </div>
        <div>
          <p>Е-mail покупателя</p>
          <input type="email"/>
        </div>
      </div>
    )
  }
}

export default Trade;