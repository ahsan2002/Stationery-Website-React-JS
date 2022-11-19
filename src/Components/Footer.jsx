import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
    <div className='footer'>

        <div className="myimg">
            <h1>Ahsan Stationary</h1>
            <div className="icons">
                <FacebookSharpIcon/>
                <LinkedInIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </div>
        </div>

        <div className="middle">
            <h3>Categories</h3>
            <p className='category'>
                <li>Home</li>
                <li>TSC Journals</li>
                <li>Office Supplies</li>
                <li>Art Supplies</li>
                <li>School Supplies</li>
                <li>Toys & Games</li>
            </p>
        </div>

        <div className="middle">
            <h3>Support</h3>
            <p className='category'>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Downloads</li>
                <li>Shop Location</li>
                <li>Partners</li>
                <li>Help</li>
            </p>
        </div>

        <div className="last">
            <p>Stay up to date on the <br /> latest from Ahsan Stationary Shop</p>
            <input type="text" placeholder='Enter your e-mail' />

            <div className="mybtn">
                    <button>Sign In</button>
                </div>
        </div>

    </div>
    </>

  )
}

export default Footer