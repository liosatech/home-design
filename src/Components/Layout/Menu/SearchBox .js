import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = () => {
  const [InputText, setInputText] = useState('');

  const inputHandler = (e) => {
    setInputText(e.target.value);
    localStorage.setItem('Is_Logged_In', true)
  };
  console.log('page rerenderd');

  return (
    <div className='container-fluid d-flex justify-content-center'>
      <input
        type="text"
        name="search"
        value={InputText}
        onChange={inputHandler}
        placeholder="Search ...."
      />
    </div>
  );
};

export default SearchBox;
