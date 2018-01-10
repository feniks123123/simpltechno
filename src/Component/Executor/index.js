import React, { Component } from 'react';

import { executor } from './data';
import InputElement from 'react-input-mask';
import { br } from '../../utils/isValidation';

import './styles.less';

class Executor extends Component {
  state = {
    fio: '',
    name: '',
    pat: '',
    date: '',
    fioHover: '',
    nameHover: '',
    patHover: '',
    dateHover: ''
  };


  render() {

    const { fio, name, pat, date, fioHover, nameHover, patHover, dateHover} = this.state;
    return (
      <div className='Executor'>
        <div className='Executor-column'>
          <div className='Executor-container'>
            <p className='Executor-text'>Исполнитель</p>
            <div className='Executor-container-radio'>
              <div>
                <label htmlFor="fiz">
                  <input type="radio" name='executor' value='fiz' id='fiz'/>
                  Физическое лицо
                </label>
              </div>
              <div>
                <label htmlFor="ur">
                  <input type="radio" name='executor' value='ur' id='ur'/>
                  Юридическое лицо
                </label>
              </div>
            </div>
          </div>
          <div className='Executor-container'>
            <div className='Executor-container'>
              <p className='Executor-text'>Фамилия <span>{ fio }</span><span>{ fioHover }</span></p>
              <input type="text" value={fio} placeholder='Введите фамилию' name='fio' {...this.propsInput}/>
            </div>
            <div className='Executor-container'>
              <p className='Executor-text'>Имя <span>{ name }</span><span>{ nameHover }</span></p>
              <input type="text" value={name} placeholder='Введите имя' name='name' {...this.propsInput}/>
            </div>
            <div className='Executor-container'>
              <p className='Executor-text'>Отчество <span>{ pat }</span><span>{ patHover }</span></p>
              <input type="text" value={pat} placeholder='Введите отчество' name='pat' {...this.propsInput}/>
            </div>
            <div className='Executor-container'>
              <p className='Executor-text'>Дата рождения <span>{ date }</span><span>{ dateHover }</span></p>
              <InputElement mask='99.99.9999' type="text" value={ date } placeholder='Выбирите дату' name='date' {...this.propsInput}/>
            </div>
          </div>
        </div>
        <div className='Executor-column'>
          <p>Ваши физические лица</p>
          {executor.map((item, i) => this.renderList(item, i))}
        </div>

      </div>
    )
  }

  renderList(item, i){
    let name = `${item.fio} ${item.name} ${item.pat}`;
    return <a key={i} onClick={ () => this.addForm(item) } onMouseOver={ () => this.hoverMouse(item) } onMouseOut={ this.noHoverMouse }>{ name }</a>
  }

  addForm = (item) => {
    this.setState({
      fio: item.fio,
      name: item.name,
      pat: item.pat,
      date: item.date
    })
  };

  hoverMouse = (item) => {
    this.setState({
      fioHover: item.fio,
      nameHover: item.name,
      patHover: item.pat,
      dateHover: item.date
    })
  };

  noHoverMouse = () => {
    this.setState({
      fioHover: '',
      nameHover: '',
      patHover: '',
      dateHover: ''
    })
  };

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