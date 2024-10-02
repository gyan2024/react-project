import { useState } from 'react';
import Head from './Header.module.css';
import UserMenu from './UserMenu.jsx';
export default function Header({...props}) {
    const [clicked, setClicked]=useState(false);
    function handleClick(){
        setClicked(prev=>!prev);
    }
  return (
    <div className={Head.div}>
      <button className={clicked?Head.display_button_active:Head.display_button } onClick={handleClick}>
        <ul className={Head.button_content}>
          <li>
            <img src="Display.svg" alt="Err" className={Head.icon} />
          </li>
          <li>
            <p>Display</p>
          </li>
          <li>
            <img src="down.svg" alt="Err" className={Head.dropdown_icon} />
          </li>
        </ul>
      </button>
      
      {clicked&&<UserMenu {...props}/>}
    </div>
  );
}
