import React, { Component } from 'react';

import './AboutPage.scss';

export default class AbautPage extends Component {

  componentDidMount() {
    //sessão SOBRE NÓS
    fetch('https://of900lijd5.execute-api.us-east-1.amazonaws.com/v2/front-end/pie-chart', {
      method: 'GET',
    }).then(results => {
      if (results.ok) {
        return results.json();
      } else {
        throw new Error(`Could not reach the API: ${ results.statusText } `);
      }
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.error(error.message);
    });
  }

  render() {
    return (
      <section className="page__about">
        <div className="radial__progress">
          <div className="radial__progress--circle">
            <div className="fill"></div>
          </div>

          <div id="activeBorder" className="active-border">
            <div id="circle" className="circle">
              <span className="prec 270" id="prec">0%</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
