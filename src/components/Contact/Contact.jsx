import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import ModalWindow from '../../Model/ModalWindow/ModalWindow';
import { useState } from 'react';
import './Contact.css'


const Contact = () => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(true)
    }
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_dbiv3an',
            'template_26z1zzh',
            form.current,
            '3VETscOdlRMwgQiSN'
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

return (
    <section className='contact' id="contact">
        <div className='Container'>
            <div className="SectionTitle">
                <h2>Contact</h2>
            </div>
            <div className="contactContent">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" className='formInput' name="name" placeholder='Name'/>
                <input type="email" className='formInput' name="email" placeholder='Email' />
                <input type="tell" className='formInput' name="tel" placeholder='TEL' id="" />
                <textarea name="message" className='formInput' rows="10" placeholder='Message'/>
                <div className="msgBtn">
                    <p className='contactMsg'>
                        お返事をさせていただくまでに、お時間を要する場合がございます。<br />
                        また、当該に関係ない内容の場合、お返事ができない場合がございますのでご了承ください。
                    </p>
                    <input className='fromBtn' type="submit" value="SEND" onClick={openModal}/>
                </div>
            </form>
            </div>
        </div>
        {/* <ModalWindow showFlag={showModal} setShowModal={setShowModal} /> */}
    </section>
)
}

export default Contact