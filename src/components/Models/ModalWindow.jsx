import React from 'react';
import {
    Overlay,
    OverlayContent,
    OverlayText,
    OverlayCloseBtn,
    OverlayMsg,
    OverlayIcon,
    OverlayImg
} from './ModalWindowElement';
import {FiInstagram} from "react-icons/fi";
import {FaTwitter} from "react-icons/fa";
import {AiOutlineGithub} from "react-icons/ai";
import {AiOutlineClose} from 'react-icons/ai';
import images from '../../constance/images';
import './ModalWindowElement.css'


const ModalWindow = (props) => {
    const closeModal = () => {
        props.setShowModal(false)
    }

  return (
    <div className="Overlay">
        {props.showFlag ? (
            <Overlay>
                <OverlayContent>
                    <OverlayCloseBtn onClick={closeModal} ><AiOutlineClose/></OverlayCloseBtn>
                    <OverlayImg>
                        <div className="overlayImage">
                            <img src={images.modalWindowImg} alt="送信完了" className='Img' />
                        </div>                    
                    </OverlayImg>
                    <div className="overlayContents">
                        <OverlayText>Thank You!</OverlayText>
                        <OverlayMsg>
                            お問合せありがとうございます！<br />
                            お返事までしばらくお待ちくださいませ。<br/>
                            確認のため、自動返信メールをお送りいたします。
                            </OverlayMsg>
                    </div>
                        <OverlayIcon className='overlaySNS'>
                            <ul>
                                <li><FiInstagram/></li>
                                <li><FaTwitter/></li>
                                <li><AiOutlineGithub /></li>
                            </ul>
                        </OverlayIcon>
                </OverlayContent>
            </Overlay>
        ) :(
            <></>
        )}
    </div>
  );
};

export default ModalWindow