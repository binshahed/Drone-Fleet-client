import React from 'react'
import CountUp from 'react-countup'
import './Counter.css'

const Counter = () => {
  return (
    <div className='my-5'>
      <div className='level-countup'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 text-center'>
              <p>Total Yar we Continue</p>
              <CountUp className='h4' end={5} duration={3} />
            </div>
            <div className='col-md-3 text-center'>
              <p>Total Drone Sell</p>
              <CountUp className='h4' end={50000} duration={3} />
            </div>
            <div className='col-md-3 text-center'>
              <p>Type of Drone we sell</p>
              <CountUp className='h4' end={15} duration={3} />
            </div>
            <div className='col-md-3 text-center'>
              <p>Total Country</p>
              <CountUp className='h4' end={120} duration={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
