import './footer.css'
import Accordion from 'react-bootstrap/Accordion';


import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='top-footer-lg'>
        <ul className='about'>
          <li className='header'>About Us</li>
          <li>Our Company</li>
          <li>Our Coffee</li>
          <li>Stories and News</li>
          <li>Starbucks Archive</li>
          <li>Investor Relations</li>
          <li>Customer Service</li>
        </ul>
        <ul className='careers'>
          <li className='header'>Careers</li>
          <li>Culture and Values</li>
          <li>Inclusion, Diversity, and Equity</li>
          <li>College Achievement Plan</li>
          <li>Alumni Community</li>
          <li>U.S. Careers</li>
          <li>International Careers</li>
        </ul>
        <ul className='social-impact'>
          <li className='header'>Social Impact</li>
          <li>People</li>
          <li>Planet</li>
          <li>Environmental and Social Impact Reporting</li>
        </ul>
        <ul className='business'>
          <li className='header'>For Business Partners</li>
          <li>Landlord Support Center</li>
          <li>Suppliers</li>
          <li>Corporate Gift Card Sales</li>
          <li>Office and Foodservice Coffee</li>
        </ul>
        <ul className='order-pickup'>
          <li className='header'>Order and Pickup</li>
          <li>Order on the App</li>
          <li>Order on the Web</li>
          <li>Delivery</li>
          <li>Order and Pickup Options</li>
          <li>Explore and Find Coffee for Home</li>
        </ul>
      </div>
      <div className='top-footer-md-sm'>
      <Accordion flush>
      <Accordion.Item eventKey="0" className="accordion">
        <Accordion.Header>About Us</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Our Company</li>
          <li>Our Coffee</li>
          <li>Stories and News</li>
          <li>Starbucks Archive</li>
          <li>Investor Relations</li>
          <li>Customer Service</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accordion">
        <Accordion.Header>Careers</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Culture and Values</li>
          <li>Inclusion, Diversity, and Equity</li>
          <li>College Achievement Plan</li>
          <li>Alumni Community</li>
          <li>U.S. Careers</li>
          <li>International Careers</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accordion">
        <Accordion.Header>Social Impact</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>People</li>
          <li>Planet</li>
          <li>Environmental and Social Impact Reporting</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="accordion">
        <Accordion.Header>For Business Partners</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Landlord Support Center</li>
          <li>Suppliers</li>
          <li>Corporate Gift Card Sales</li>
          <li>Office and Foodservice Coffee</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="accordion">
        <Accordion.Header>Order and Pickup</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Order on the App</li>
          <li>Order on the Web</li>
          <li>Delivery</li>
          <li>Order and Pickup Options</li>
          <li>Explore and Find Coffee for Home</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      <div className='bottom-footer sm'>
        <div className='social-icons'>
            <div className='social-icon'>
              <img alt="" src="./images/icons/spotify.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/facebook.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/pinterest.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/instagram.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/youtube.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/twitter.svg" />
            </div>
        </div>
        <div className='links'>
          <div className='link'>Privacy Policy</div>
          <div className='link'>Terms of Use</div>
          <div className='link'>CA Supply Chain Act</div>
          <div className='link'>Cookie Preferences</div>
        </div>
        <div className='copyright'>
          <h6>&copy; 2022 Starbucks Coffee Company. All rights reserved.</h6>
        </div>
      </div>
      </div>
      <hr className='divider lg'/>
      <div className='bottom-footer lg'>
        <div className='social-icons'>
            <div className='social-icon'>
              <img alt="" src="./images/icons/spotify.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/facebook.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/pinterest.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/instagram.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/youtube.svg" />
            </div>
            <div className='social-icon'>
            <img alt="" src="./images/icons/twitter.svg" />
            </div>
        </div>
        <div className='links'>
          <div className='link'>Privacy Policy</div>
          <div className='link'>Terms of Use</div>
          <div className='link'>CA Supply Chain Act</div>
          <div className='link'>Cookie Preferences</div>
        </div>
        <div className='copyright'>
          <h6>&copy; 2022 Starbucks Coffee Company. All rights reserved.</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer