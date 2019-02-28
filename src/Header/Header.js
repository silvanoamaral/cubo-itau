import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
            <header>
                <h1 id="logo">
                    Logo
                </h1>
                <nav>
                    <ul>
                        <li>Página inicial</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </header>
        );
    }
}