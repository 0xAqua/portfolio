import React from 'react';
import data from '../../constance/data';
import "./Service.css";
import {GiFlowerTwirl} from "react-icons/gi"


const Service = () => {
    return (
        <section id="service" className='service'>
            <div className="Container serviceContainer">
                <div className="SectionTitle">
                    <h2>Service</h2>
                </div>
                <div className="serviceContents">
                    {
                        data.services.map((service, index) => {
                            return (
                                <div className="serviceContentItem" key={index}>
                                    <div className="serviceImageIcon">
                                        <img src={service.img} alt="サービスアイコン画像" className="servicesImg" />
                                    </div>
                                    <h3 className="serviceIconTitle">{service.title}</h3>
                                    <p className="serviceIconText">{service.text}</p>
                                </div>
                            )
                    })
                }
            </div>
            {/* <div className="numberContents">
                <GiFlowerTwirl  size={24}/>
                <p className="number">03</p>
            </div> */}
        </div>
        </section>
    )
}

export default Service