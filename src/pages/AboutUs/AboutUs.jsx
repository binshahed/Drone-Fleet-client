import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Shared/Navigation/Navigation'
import './AboutUs.css'

const AboutUs = props => {
  return (
    <div>
      {!props.home && <Navigation />}
      <section className='page-section' id='about'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='text-center py-5 pseudo_border'>
              About Drone Fleet
            </h2>
            <h3 className='section-subheading text-muted'>
              Since 2015, Drone Fleet has been excited to provide our customers
              with the latest drone technology, quick shipping, and excellent
              customer service. Our top priorities have always been providing a
              great shopping experience and educating people about all things
              drone-related. Our knowledgeable sales representatives and
              technical support staff have over 20 years of experience in the
              industry, and we are committed to sharing our expertise with our
              customers. Through our custom-made enterprise solutions, we have
              helped countless companies and agencies take their operations to
              the next level.
              <br />
              <br />
              Thank you for choosing Drone Fleet!
            </h3>
          </div>
          <ul className='timeline'>
            <li>
              <div className='timeline-image'></div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>2015-2022</h4>
                  <h4 className='subheading'>
                    Experienced Aerial Cinematographers
                  </h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    Founded in 2015, Drone Fleet was one of the first e-commerce
                    stores for drones. The original Drone Fleet owners were
                    experienced cinematographers, who at the time were mounting
                    film and video cameras to RC helicopters for aerial shots,
                    Drone Fleet started in a garage with one mission in mind; to
                    bring drones to the film industry. Working on films such as
                    Michael Bay's Transformers, Drone Fleet quickly grew to
                    become a well-known name in the movie industry.
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'></div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>March 2017</h4>
                  <h4 className='subheading'>
                    One Of The First DJI Authorized Dealers
                  </h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    As one of the first DJI Authorized dealers in North America,
                    Drone Fleet worked closely with DJI and established a
                    long-standing relationship that allows us to deliver the
                    highest quality drones before anyone else.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className='timeline-image'></div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>December 2018</h4>
                  <h4 className='subheading'>Opened Drone Fleet Storefront</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    In 2018, Drone Fleet moved from our warehouse facility in
                    Newbury Park, CA to a space in Westlake Village, CA with a
                    storefront to keep up with the demand for walk-in purchases.
                    We were visited by customers from as far as Dubai and
                    Brazil.
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'></div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>July 2019</h4>
                  <h4 className='subheading'>Thermal Experts</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    In 2019, Drone Fleet's mission was to scale to be the leader
                    in thermal drones for commercial applications. With our team
                    of highly experienced thermal UAV experts, we continue to
                    create practical solutions for first responders, agriculture
                    professionals, energy inspection and more. In a short amount
                    of time, we have curated many effective enterprise packages
                    that have helped local and national entities achieve their
                    specific goals.
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {!props.home && <Footer />}
    </div>
  )
}

export default AboutUs
