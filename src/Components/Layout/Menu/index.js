import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

const Index = () => {
  const [enterStates, setEnterStates] = useState(Array(4).fill(false));

  const hoverHandler = (index) => {
    const newEnterStates = [...enterStates];
    newEnterStates[index] = true;
    setEnterStates(newEnterStates);
  };

  const leaveHandler = (index) => {
    const newEnterStates = [...enterStates];
    newEnterStates[index] = false;
    setEnterStates(newEnterStates);
  };

  return (
    <div className='navBar'>
      <div className='container d-flex justify-content-center mt-3'>
        <ul className='d-flex justify-content-center'>
          <li
            className={enterStates[0] ? 'base-state hoverState' : 'base-state'}
            onMouseEnter={() => hoverHandler(0)}
            onMouseLeave={() => leaveHandler(0)}
          >
            <a href='/'>Home</a>
          </li>
          <li
            className={enterStates[1] ? 'base-state hoverState' : 'base-state'}
            onMouseEnter={() => hoverHandler(1)}
            onMouseLeave={() => leaveHandler(1)}
          >
            <a href='/blog'>Blog</a>
          </li>
          <li
            className={enterStates[2] ? 'base-state hoverState' : 'base-state'}
            onMouseEnter={() => hoverHandler(2)}
            onMouseLeave={() => leaveHandler(2)}
          >
            <a href='#'>Project</a>
          </li>
          <li
            className={enterStates[3] ? 'base-state hoverState' : 'base-state'}
            onMouseEnter={() => hoverHandler(3)}
            onMouseLeave={() => leaveHandler(3)}
          >
            <a href='/about'>About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
