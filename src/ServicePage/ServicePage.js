import React, { Component } from 'react';
export default class ServicePage extends Component {

    render() {
        return (
            <article className="container">
                <h2 className="title">Serviços</h2>
                <h3 className="sub__title">The standard Lorem Ipsum passage, used since the 1500s</h3>
                <div className="row">
                    <div className="col">
                        <i className="material-icons dp48">settings</i>
                        <h4>Rhoncus Purus In</h4>
                        <p>One of three columns</p>
                    </div>
                    <div className="col">
                        <h4>Mattis Augue Tristique</h4>
                        <p>One of three columns</p>
                    </div>
                    <div className="col">
                        <h4>Elementum Lacus Vitae</h4>
                        <p>One of three columns</p>
                    </div>
                    <div className="col">
                        <h4>Mauris Bibendum Odio Ligula</h4>
                        <p>One of three columns</p>
                    </div>
                </div>
            </article>
        );
    }
}