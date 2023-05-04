import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Icofont from 'react-icofont';

function App() {
  // https://coolors.co/cacaaa-eec584-c8ab83-55868c-7f636e
  const [createMode, setCreateMode] = useState(false);
  const [toggleName, setToggleName] = useState(true);
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState(localStorage.getItem('name'));
  const [localLists, setLocalLists] = useState([]);
  const [initialRender, setInitialRender] = useState('true');
  // New to-do list
  const [storedTitle, setStoredTitle] = useState('');
  const [storedDesc, setStoredDesc] = useState('');
  const [storedFirstTimer, setStoredFirstTimer] = useState('');
  const [storedSecondTimer, setStoredSecondTimer] = useState('');
  /* Rename
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDesc, setEditedDesc] = useState('');
  const [editedFirstTimer, setEditedFirstTimer] = useState('');
  const [editedSecondTimer, setEditedSecondTimer] = useState('');
  */

  useEffect(() => {
    if (initialRender) {
      allStorage();
      setInitialRender(false);
    }
  }, [initialRender]);

  function allStorage() {

    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return setLocalLists(values);
  }

  function nameSetter(e) {
    e.preventDefault();
    if (name === '') {
      setToggleName(false);
    } else {
      localStorage.setItem('name', name);
      setStoredName(localStorage.getItem('name'));
      setToggleName(!toggleName);
    }
  }
  function toggleCreateMode() {
    setCreateMode(!createMode);
    setStoredTitle('');
    setStoredDesc('');
    setStoredFirstTimer('');
    setStoredSecondTimer('');
  }
  function rename() {
    localStorage.removeItem('name')
    setStoredName(localStorage.getItem('name'));
  }
  function newToDo() {
    localStorage.setItem(storedTitle, storedTitle + '&' + storedDesc + '}' + storedFirstTimer + '|' + storedSecondTimer);
    // localStorage.setItem(('list' + localStorage.length), storedTitle + '&' + storedDesc + '}' + storedFirstTimer + '|' + storedSecondTimer);
    setCreateMode(!createMode);
    setStoredTitle('');
    setStoredDesc('');
    setStoredFirstTimer('');
    setStoredSecondTimer('');
    allStorage();
  }

  return (
    <div>
      <header>
        <div className='header__name'>
          <p>Hello, <span>{storedName}</span>{storedName && <i onClick={rename} className='header__edit'><Icofont icon="icofont-pencil" /></i>}</p>
          {!storedName &&
            <form onSubmit={nameSetter}>
              <input autoComplete="off" className='name__input' type="text" onChange={e => setName(e.target.value)} placeholder='name' />
              <input className='name__submit' type="submit" value='Ok' />
            </form>
          }
        </div>
      </header>
      <main>
        {!createMode && <i className='list__adder' onClick={toggleCreateMode}><Icofont icon="icofont-plus-square" /></i>}
        {createMode && <div className='list__creater'>
          <div className='list__creater__header'>
            <h2> New list</h2>
          </div>
          <div className='list__creater__main'>
            <label htmlFor="list_title">List title</label>
            <input placeholder='Gym' autoComplete="off" type="text" onChange={e => setStoredTitle(e.target.value)} id='list_title' />
            <label htmlFor="list_desc">List description</label>
            <textarea placeholder='Today I will train chest and biceps.' autoComplete="off" className='list_textarea' onChange={e => setStoredDesc(e.target.value)} id="list_desc" resize="false" cols="30" rows="10"></textarea>
            <label htmlFor="list_time">Time</label>
          </div>
          <div className='list__creater__footer'>
            <input autoComplete="off" placeholder='15:00' onChange={e => setStoredFirstTimer(e.target.value)} type="text" id='list_time_first' />
            /
            <input autoComplete="off" placeholder='15:30' onChange={e => setStoredSecondTimer(e.target.value)} type="text" id='list_time_second' />
          </div>
          <div className='list__creater__buttons'>
            <button onClick={toggleCreateMode} className='list__creater__delete'><Icofont icon="trash" /></button>
            <button onClick={newToDo} className='list__creater__create'><Icofont icon="icofont-plus" /></button>
          </div>
        </div>}
        {localLists.map((info) => {
          if (info.includes('&')) {
            return (
              <div data-list={info.substring(0, info.indexOf('&'))} key={info.substring(0, info.indexOf('&'))} className='list__container'>
                <div className='list__header'>
                  <h2 className='list__title'>{info.substring(0, info.indexOf('&'))}</h2>
                  {
                    /*
                  <Icofont onClick={e => {setEditedTitle(e.target.parentNode.parentNode.children[0].firstChild.innerHTML);setEditedDesc(e.target.parentNode.parentNode.children[1].firstChild.innerHTML);
                  setEditedFirstTimer(e.target.parentNode.parentNode.children[2].firstChild.innerHTML);
                  setEditedSecondTimer(e.target.parentNode.parentNode.children[2].children[2].innerHTML);
                  editList()}} className='list__edit' icon="icofont-edit" />
                  e.target.parentNode.parentNode.children[0].firstChild.innerHTML title
                  e.target.parentNode.parentNode.children[1].firstChild.innerHTML desc
                  e.target.parentNode.parentNode.children[2].firstChild.innerHTML firsttimer
                  e.target.parentNode.parentNode.children[2].children[2].innerHTML sectimer
                  */
                  }
                  <Icofont onClick={e => { localStorage.removeItem(e.target.parentNode.parentNode.getAttribute('data-list')); allStorage() }} className='list__close' icon="icofont-bin" />
                </div>
                <div className='list__main'>
                  <p>{info.substring(info.indexOf('&') + 1, info.indexOf('}'))}</p>
                </div>
                <div className='list__footer'>
                  <p>{info.substring(info.indexOf('}') + 1, info.indexOf('|'))}</p>
                  <p className='list__footer__sep'>/</p>
                  <p>{info.substring(info.indexOf('|') + 1)}</p>
                </div>
              </div>
            )
          }
        })}

      </main>
    </div>
  );
}

export default App;
