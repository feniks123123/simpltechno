import React, { Component } from 'react';

import Trade from './Component/Trade';
import Executor from './Component/Executor';
import MethodMoney from "./Component/MethodMoney";

import './styles.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Trade/>
        <Executor/>
        <MethodMoney/>
        <div>
          <p>Время исполнения заказа</p>
          <input type="time"/>
        </div>
        <div>
          <p>Тип комиссии</p>
          <select name="" id="">
            <option value="">50/50</option>
            <option value="">Испольнитель</option>
            <option value="">Покупатель</option>
          </select>
        </div>
        <div>
          <p>Сумма сделки</p>
          <input type="text"/>
        </div>
        <div>
          <p>Итоговая сумма к выводу</p>
          <input type="text"/>
        </div>
        <div>
          <button>Создать</button>
        </div>
      </div>
    );
  }
}

export default App;
