import '../style/Contact.css';
import tel from '../assets/TEL.png'

function Contact(props){
  let theme= props.mode
	return<div className={`Contact ${theme}`}>
        <div className='Titre-contact'>
            <h1>Nous contacter:</h1>
        </div>
        <div className='Element-contact'>
            <span className='Element-contact1'> <img alt='' src={tel} height={'50px'}></img><h3>06.12.34.56.78</h3></span>
            <span className='Element-contact2'> <img alt='' src='https://img.icons8.com/color/12x/apple-mail.png' height={'50px'}></img><h3>reactbmwmotorsport-pro@gmail.com</h3></span>
        </div>
        <div className='iframe'>
            <iframe className="myFrame" title="myFrame"   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131642.3132286805!2d69.48371281723769!3d-49.493105853117314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb36cabf2d157c333%3A0x61519604daf263f0!2sMont%20Ross!5e0!3m2!1sfr!2sfr!4v1665856662336!5m2!1sfr!2sfr"> 
            </iframe>
        </div>
    </div>
}

export default Contact;
