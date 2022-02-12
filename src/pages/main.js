import React from 'react';

import logo from '../img/logo.jpg';
import {FaReact }from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {AiOutlineGithub} from 'react-icons/ai';
import './style.css';

export default function Main() {

    return (
        <div className="page">
            <img src={logo}/>
            <h2>Todo test app</h2>
            <ul>
                <li>You can add, remove and edit todo note</li>
                <li>Set todo note as done, just click on todo item</li>
                <li>Make all items done and remove all completed items</li>
                <li>Has inexistent page and adaptive for all devices</li>
            </ul>
            <div className="stack-div">
                <FaReact className="stack"/>
                <h2>React + Redux</h2>
                <SiRedux className="stack"/>
            </div>
            <div className="info">
                <a href="https://github.com/VeronikaPolkhanova">
                    <AiOutlineGithub/>
                    VERONIKA POLKHANOVA
                </a>
            </div>
        </div>
    )
}