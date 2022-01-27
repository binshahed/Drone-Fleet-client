import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingBag,
  faTruck,
  faHandHoldingUsd,
  faUsersCog,
  faHeadset
} from '@fortawesome/free-solid-svg-icons'
import './ReasonsToShop.css'

const ReasonsToShop = () => {
  return (
    <div className='reasons'>
      <div className='container mT-5 py-5 '>
        <h1 className='text-center py-5 pseudo_border'>
          Reasons To Shop Drone Fleet
        </h1>
        <div className='row'>
          <div className='col-md-3 text-center'>
            <p className='reasons-icon text-center'>
              <FontAwesomeIcon icon={faTruck} />
            </p>
            <p>Free Shipping Over $599</p>
          </div>
          <div className='col-md-3 text-center'>
            <p className='reasons-icon text-center'>
              <FontAwesomeIcon icon={faHandHoldingUsd} />
            </p>
            <p>Money Back Guarantee</p>
          </div>
          <div className='col-md-3 text-center'>
            <p className='reasons-icon text-center'>
              <FontAwesomeIcon icon={faUsersCog} />
            </p>
            <p>Dedicated Service Team</p>
          </div>
          <div className='col-md-3 text-center'>
            <p className='reasons-icon text-center'>
              <FontAwesomeIcon icon={faHeadset} />
            </p>
            <p>Online Support 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReasonsToShop
