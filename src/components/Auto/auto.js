import React, {Component} from 'react';
import getDistance from '../../utils/getDistance';

import './auto.css';

export default class Auto extends Component {

  render() {

    return (
      <div className="item-auto auto" v-if="car">
        <header className="auto__header">
          <img
            v-if="car.images"
            src="car.images"
            alt="`Изображение авто:`"
            className="auto__img" />

          <p className="auto__title"></p>
          <p className="auto__price">₽</p>
        </header>
        <div className="auto__body">

            <ul className="auto__features">
                <li className="auto__feature"></li>
            </ul>

            <span className="auto__show-more">еще 27 особенностей</span>
            <span className="auto__show-more">скрыть</span>
        </div>

        <div className="auto__footer">
            <svg className="auto__loc-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <g fill-rule="evenodd">
                <path d="m249.1 82c54.4 0 113.1 33.7 114.9 124.2 0
                78.4-88.8 175.8-109.7 198.5-1.7 1.8-6.9 1.8-8.7
                0-20.8-20.9-109.6-118.4-109.6-198.5 0-90.5 57.8-124.2
                113.1-124.2zm0.8 148.8c19.9 0 36-16.1 36-35.9s-16.1-35.9-36-35.9-36
                16.1-36 35.9 16.1 35.9 36 35.9z"/>
              </g>
            </svg>
            <a target="_blank" href="#" className="auto__address">
                <span>Адрес дилера</span>
            </a>
            <span v-else className="auto__address">Адрес дилера</span>

        </div>
    </div>
    );
  };
};