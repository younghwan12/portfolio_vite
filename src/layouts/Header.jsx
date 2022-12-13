import React from 'react'

function Header() {
  return (
    <header id="header">
        <div className="header__inner">
            <nav className="header__menu">
                <ul className="moving">
                    <li><a href="#section03">about</a></li>
                    <li><a href="#section04">site</a></li>
                    <li><a href="#section05">script</a></li>
                    <li><a href="#section06">study</a></li>
                </ul>
                <ul className="nomoving">
                    <li><a href="https://github.com/younghwan12" target="_blank">github</a></li>
                    <li><a href="https://younghwan112.tistory.com/" target="_blank">blog</a></li>
                </ul>
            </nav>
            <div className="ham_menu">
                <input type="checkbox"/>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </header>
  )
}

export default Header