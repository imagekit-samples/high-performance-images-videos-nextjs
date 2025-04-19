import { FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white p-5 mt-8 text-slate-500">
  <div className="container max-w-[1200px] p-5 mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
    <img src="https://ik.imagekit.io/ikmedia/logo/ikLogoWhite_30FbZCVusC.svg" alt="Logo" className="w-40" width="160" height="33" />
    <div>
      <h4 className="font-bold mb-2">HELP</h4>
      <ul className='text-sm text-slate-400'>
        <li>Account</li>
        <li>Rewards</li>
        <li>Tracking</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-2">ABOUT US</h4>
      <ul className='text-sm text-slate-400'>
        <li>Who We Are</li>
        <li>What our customers say</li>
        <li>Request a Return</li>
        <li>Request an Exchange</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-2">TERMS & CONDITIONS</h4>
      <ul className='text-sm text-slate-400'>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Orders & Returns</li>
        <li>Shipping</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-2">SUBSCRIBE TODAY!</h4>
      <p className='text-sm text-slate-400'>Sign up to receive all the latest news, releases and offers</p>
      <input type="email" placeholder="Enter your email address..." className="p-2 mt-5 mb-1 w-full outline" />
      <button className="p-2 mt-2 bg-teal-500 text-white text-sm rounded-xs">Subscribe</button>
    </div>
  </div>
  <div className="flex justify-center mt-8 space-x-4">
    <FaEnvelope />
    <FaFacebook />
    <FaInstagram />
    <FaPinterest />
    <FaYoutube />
  </div>
  <div className="text-center mt-8 text-sm text-slate-400">
    Images from Dailyobjects.com & demo app by ImageKit.io
  </div>
</footer>
  );
};

export default Footer;
