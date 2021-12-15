import React from 'react'
import aboutUsImg from '../../images/aboutus.jpg'
import Footer from '../Footer/Footer'
import Navigation from '../Shared/Navigation/Navigation'

const AboutUs = props => {
  return (
    <div>
      {!props.home && <Navigation />}
      <div className='container py-5 my-5'>
        <h1 className='text-center py-5 pseudo_border'>About Us</h1>

        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              esse recusandae illo animi accusantium repudiandae saepe.
              Explicabo consequatur aspernatur quaerat, voluptatibus labore
              pariatur eveniet accusantium itaque ut nisi illo nostrum tempora
              ea culpa architecto necessitatibus et delectus eligendi quo. Quas
              rem deserunt dignissimos numquam assumenda possimus repudiandae,
              aliquam quod, accusamus omnis veritatis optio quibusdam
              doloremque, est beatae rerum enim laborum nisi. Pariatur est vitae
              adipisci? Deserunt voluptatibus nam consectetur quas, soluta,
              molestiae similique id iste odit voluptate, optio assumenda
              laboriosam architecto quo dicta excepturi sapiente explicabo ad
              eum earum nostrum vel ab illum culpa. Porro reprehenderit cumque
              sint eveniet perspiciatis officia assumenda nam consectetur odio
              optio, alias cum magnam accusantium eius maiores eos nulla
              laudantium labore neque non sit animi at. Consequatur ut ullam qui
              perferendis in quia libero alias aut voluptatum. Quae cumque enim
              quis, nesciunt maxime architecto sequi, eum eligendi iure non
              placeat at eaque voluptatibus nostrum aspernatur accusantium.
              Excepturi, repellendus. Iste, expedita omnis. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Quia necessitatibus
              voluptate, reiciendis eos ad at velit asperiores vero minus
              maiores, quos accusamus nobis laudantium perspiciatis magni omnis
              soluta eveniet aliquid alias atque animi vitae esse optio autem.
              Dicta numquam eligendi totam. Odit atque aliquid eos voluptate,
              magni consequatur, porro doloremque tenetur obcaecati a in ab
              commodi ipsa. Beatae recusandae voluptatibus dolore ex ab eius ea
              quidem nihil quae doloremque! Exercitationem ipsum quasi eos,
              maxime aliquam, id officia enim mollitia odio pariatur nemo error
              nisi voluptatem laboriosam et expedita nesciunt aut? Facilis quos
              exercitationem amet quisquam itaque dicta animi error beatae,
              dolore officia recusandae distinctio nihil similique odit numquam
              temporibus autem officiis nostrum fugit qui iste nobis voluptatem
              quidem. Qui expedita deleniti culpa, provident non sit nostrum
              sequi consequatur, veniam dolorum alias neque aliquid earum iste
              eligendi libero quo doloremque laborum voluptatibus, error rerum?
              Sed est fuga consequatur pariatur velit nobis recusandae maiores
              sunt, magni soluta assumenda.
            </p>
          </div>
          <div className='col-md-6 col-sm-12'>
            <img style={{ width: '80%' }} src={aboutUsImg} alt='' />
          </div>
        </div>
      </div>
      {!props.home && <Footer />}
    </div>
  )
}

export default AboutUs
