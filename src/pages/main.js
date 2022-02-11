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
                <li>You can add todo note</li>
                <li>Delete todo note</li>
                <li>Edit todo note</li>
                <li>Set todo note as done, just click on todo item</li>
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