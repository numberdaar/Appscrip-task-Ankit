import React from 'react';
import  '../footer/footer.css';
import FooterList from '../list/FooterList';
import { IoLogoFacebook , IoLogoInstagram } from "react-icons/io";



const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='left-area'>
            <h3></h3>
            <input type="email" placeholder='Enter your e-mail' />
            <button className='email-btn'>Subscribe</button>
          </div>

          <div className='right-area'>
            <ul>
              <li>CONTACT US</li>
              <li>+44 221 133 5360</li>
              <li>customercare@metamuse.com</li>
            </ul>
            <ul>
              <li>CURRENCY</li>
              <li>+ USD</li>
            </ul>
          </div>
        </div>

        <hr className='divider' />

        <div className='footer-section-2'>
          <div className='list-container'>
            <FooterList
            title={'metta muse'}
            items={['About us', 'Stories' , 'Artisians' , 'Contacts', 'Boutiques' ,'EU Compliance Docs' ]}
            />
            <FooterList
            title={'QUICK LINK'}
            items={['Orders & Shiiping' , 'Join, login as a Seller' , 'Payments & Pricing' , 'Returns & Refunds' , 'FAQs' , 'Privacy Policy', 'Terms & Conditions']}
            />
            <FooterList
            title={'FOLLOW US'}
            items={[<IoLogoFacebook key={'fb'}/> , <IoLogoInstagram key={'ig'}/>]}
            />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer