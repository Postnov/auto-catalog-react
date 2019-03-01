import React, {Component} from 'react';
import getDistance from '../../utils/getDistance';
import getNumEnding from '../../utils/getNumEnding';

import './auto.css';

export default class Auto extends Component {

  state = {
    showAll: false
  }

  distance = 0;

  setShowFeatures = (showState) => {
    this.setState({
      showAll: showState,
    });
  };


  componentDidMount() {
    let {car, setDialerDistance} = this.props;
    let distance = this.distance;

    setDialerDistance(distance, car.id);
  }


  render() {
    let {showAll} = this.state;
    let {
      car: {
        model_name:modelName,
        kit_name:kitName = false,
        images: [carImg],
        price: carPrice,
        features: carFeatures,
        dealer: {
          name:dealerName,
          city: dealerCity,
          address:dealerStreet,
          latitude:dLat = null,
          longitude:dLon = null,
          url:dealerUrl
        } = {},
      },
      userCoords: [userLat, userLon]

    } = this.props;

    //distance for dealder
    let distance = 0;

    if (dLat && dLon) distance = getDistance(dLat, dLon, userLat, userLon).toFixed(1);
    this.distance = distance;


    // form dealer adress
    let dealerAddress = '';

    if (distance) dealerAddress += distance + ' км., ';
    if (dealerName) dealerAddress += dealerName + ', ';
    if (dealerCity) dealerAddress += dealerCity + ', ';
    if (dealerStreet) dealerAddress += dealerStreet;

    // features and set count showing
    let countFeatures = showAll ? carFeatures.length : 3;

    let features = carFeatures.slice(0, countFeatures).map((el, index) => {
      return (
        <li className='auto__feature' key={el + index}>{el}</li>
      );
    });

    //features ending btn
    let ending = getNumEnding(carFeatures.length - 3,
      ['особенность', 'особенности', 'особеностей']);

    //button for show/hide features
    let btnManageShowList;

    if (showAll) {
      btnManageShowList = (
        <span
          className='auto__show-more'
          onClick={() => this.setShowFeatures(false)}>
          скрыть</span>
      );
    }else {
      btnManageShowList = (
        <span
          className='auto__show-more'
          onClick={() => this.setShowFeatures(true)}>
          ещe {carFeatures.length - 3} {ending}</span>
      );
    };

    //dealder link
    let dealerAddressLink = (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={dealerUrl}
        className='auto__address'>
        <span>{dealerAddress}</span>
      </a>
    );

    let dealerAddressSpan = <span className='auto__address'>{dealerAddress}</span>;


    return (
      <div className='item-auto auto'>
        <header className='auto__header'>
          <img
            src={carImg}
            alt={`Изображение авто: ${carImg}`}
            className='auto__img' />

          <p className='auto__title'>{modelName} {kitName}</p>
          <p className='auto__price'>{carPrice.toLocaleString()} ₽</p>
        </header>
        <div className='auto__body'>
          {features ? <ul className='auto__features'> {features} </ul> : null}
          {carFeatures.length > 3 ? btnManageShowList : null}
        </div>

        <div className='auto__footer'>
          <svg
            className='auto__loc-icon'
            viewBox='0 0 500 500'
            xmlns='http://www.w3.org/2000/svg'>
            <g fillRule='evenodd'>
              <path d='m249.1 82c54.4 0 113.1 33.7 114.9 124.2 0
              78.4-88.8 175.8-109.7 198.5-1.7 1.8-6.9 1.8-8.7
              0-20.8-20.9-109.6-118.4-109.6-198.5 0-90.5 57.8-124.2
              113.1-124.2zm0.8 148.8c19.9 0 36-16.1 36-35.9s-16.1-35.9-36-35.9-36
              16.1-36 35.9 16.1 35.9 36 35.9z'/>
            </g>
          </svg>

          {dealerUrl ? dealerAddressLink : dealerAddressSpan}
        </div>
    </div>
    );
  };
};
