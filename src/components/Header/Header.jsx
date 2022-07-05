import React from 'react';
import './Header.css';
import images from '../../constance/images';
import {GiButterflyFlower} from 'react-icons/gi';

const Header = () => {
  return (
    <section className='header'>
        <div className="headerContainer">
            <div className="headerTitle">
                <h1>TSUJI KODAI</h1>
            </div>
            <div className="headerSign">
                <img src={images.signImg} alt="辻航大のサイン" className="headerImg" />
            </div>
            <div className="numberContents">
                <GiButterflyFlower  size={24}/>
                <span className="number">01</span>
            </div>
            <div className="headerContents">
                <div className="headerImages">
                    <div className="headerImage">
                        <div className="headerImageLogo">
                            <img src={images.headerLogoImg} alt="蝶々の画像" className='headerImg'/>
                        </div>
                        <div className="headerImageItem1">
                            <img src={images.headerImg1} alt="私の紹介画像1枚目" className='headerImg' />
                        </div>
                        <div className="headerImageItem2">
                            <img src={images.headerImg2} alt="私の紹介画像2枚目" className='headerImg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Header