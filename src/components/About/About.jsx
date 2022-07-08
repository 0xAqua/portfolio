import React from 'react';
import images from '../../constance/images';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="Container">
        <div className="SectionTitle">
          <h2>About</h2>
        </div>
        <div className="aboutContents">
          <div className="aboutImage">
            <img src={images.aboutImg} alt="私の画像" className="Img" />
          </div>
          <div className="aboutSelfIntroduction">
            <div className="name">
              <span>KODAI TSUJI</span>
              <h3>ツジコウダイ</h3>
            </div>
            <div className="career">
              <p className='careerJPN'>
                1998年生まれ システムエンジニア<br />
                2020年に日本電通株式会社に入社 2021年にIT統合 NDIソリューションズ株式会社に転籍<br />
                営業管理システムやkintoneでプラグインを活用したWebアプリ開発を担う<br />
                独学でプログラミングを学び、2022年に建設会社のホームページを作成<br />
                大学時代に学んだ数学を活かし、コンペ「kaggle」に参加
              </p>
              <p className="careerUS">
                Born 1998 System engineer <br />
                Joined Nippon Dentsu Co., Ltd. in 2020 Transferred to IT Integrated NDI Solutions Co., Ltd. in 2021 
                Responsible for web application development using plug-ins in sales management system and kintone 
                Self-taught programming and created a construction company homepage in 2022 
                Participate in the competition "kaggle" by utilizing the mathematics learned in college
              </p>
            </div>
            <div className="skill">
              <h4>SKILL</h4>
              <div className="programmingLang">
                <p>
                  HTML, CSS, JavaScript, Python, Go, PHP,
                  React, Django, Flask, Gin, SCSS, React, Node.js
                </p>
              </div>
              <div className="toolItem">
                <p>
                  AdobeXD, Photoshop, Premium Pro, Illustrator, Anaconda,
                  Blender, My SQL, WordPress, Docker, Kubernetes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About