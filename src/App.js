import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <select name="" id="">
            <option value="">Товар</option>
            <option value="">Услуги</option>
          </select>
        </div>
        <div>
          <input type="text"/>
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"/>
        </div>
        <div>
          <div><input type="radio"/></div>
          <div><input type="radio"/></div>
        </div>
        <div>
          <input type="email"/>
        </div>
        <div>
          <div><input type="radio"/></div>
          <div><input type="radio"/></div>
        </div>
        <div>
          <div>
            <p>Фамилия</p>
            <input type="text"/>
          </div>
          <div>
            <p>Имя</p>
            <input type="text"/>
          </div>
          <div>
            <p>Отчество</p>
            <input type="text"/>
          </div>
          <div>
            <p>Дата рождения</p>
            <input type="date"/>
          </div>
        </div>
        <div>
          <div>
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
          </div>
          <div>
            <div>
              <p>Наименование</p>
              <input type="text"/>
            </div>
            <div>
              <p>Бик</p>
              <input type="text"/>
            </div>
            <div>
              <p>Лицевой счет</p>
              <input type="text"/>
            </div>
            <div>
              <p>Корр.счет</p>
              <input type="text"/>
            </div>
            <div>
              <p>Имя получателя платежа</p>
              <input type="text"/>
            </div>
            <div>
              <p>ИНН</p>
              <input type="text"/>
            </div>
            <div>
              <p>КПП</p>
              <input type="text"/>
            </div>
            <div>
              <p>БАНК</p>
              <input type="text"/>
            </div>
          </div>

        </div>
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
