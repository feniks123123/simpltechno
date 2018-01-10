import React, { Component } from 'react';

import './styles.less';

class Executor extends Component {
  state = {
    fio: '',
    name: '',
    pat: '',
    date: ''
  };


  render() {
    const { fio, name, pat, date } = this.state;
    return (
      <div className='Executor'>
        <div>
          <div className='Executor-container'>
            <p className='Executor-text'>Исполнитель</p>
            <div className='Executor-container-radio'>
              <div>
                <label htmlFor="fiz">
                  <input type="radio" id='fiz'/>
                  Физическое лицо
                </label>
              </div>
              <div>
                <label htmlFor="ur">
                  <input type="radio" id='ur'/>
                  Юридическое лицо
                </label>
              </div>
            </div>
          </div>
          <div className='Executor-container'>
            <div className='Executor-container'>
              <p className='Executor-text'>Фамилия <span>{ fio }</span></p>
              <input type="text" value={fio} placeholder='Введите фамилию' name='fio' {...this.propsInput}/>
            </div>
            <div className='Executor-container'>
              <p className='Executor-text'>Имя <span>{ name }</span></p>
              <input type="text" value={name} placeholder='Введите имя' name='name' {...this.propsInput}/>
            </div>
            <div className='Executor-container'>
              <p className='Executor-text'>Отчество <span>{ pat }</span></p>
              <input type="text" value={pat} placeholder='Введите отчество' name='pat' {...this.propsInput}/>
            </div>
            <div className='Executor-container'>
              <p className='Executor-text'>Дата рождения <span>{ date }</span></p>
              <input type="date" value={date} placeholder='Выбирите дату' name='date' {...this.propsInput}/>
            </div>
          </div>
        </div>
        <div>
          <p>Ваши физические лица</p>
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

  blur = () => {
    this.setState({ focus: false })
  };

  propsInput = {
    onBlur: this.blur,
    onFocus: this.focus,
    onChange: this.onChange
  };

}

export default Executor;