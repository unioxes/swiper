import image1 from '../team/team_img/IMAGE.png'
import image2 from '../team/team_img/IMAGE-2.png'
import image3 from '../team/team_img/IMAGE-4.png'
import image4 from '../team/team_img/IMAGE-1.png'
import image5 from '../team/team_img/IMAGE-3.png'
import '../team/team.css'
import logo from '../header/header_img/logo.png'
import inst from '../team/team_img/inst.png'
import twt from '../team/team_img/twt.png'
import fbook from '../team/team_img/fbook.png'

function Team(){
    return(
        <>
        <section className="team">
            <div className="team-container">
                <div className="left-text-team">
                    <p>Meet our team</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.</p>
                    <a href="">See team</a>
                </div>
                <div className="team-img-container">
                    <div>
                        <img src={image1} alt="" />
                        <p>Stephen Collier<span>Senior Partner</span></p>
                    </div>
                    <div>
                        <img src={image2} alt="" />
                        <p>Ferris Wonder<span>Associate Partner</span></p>
                    </div>
                    <div>
                        <img src={image3} alt="" />
                        <p>Niko Ferry<span>Partner</span></p>
                    </div>
                    <div>
                        <img src={image4} alt="" />
                        <p>Nolan Peters<span>Associate</span></p>
                    </div>
                    <div>
                        <img src={image5} alt="" />
                        <p>Aria Stone<span>Senior Partner</span></p>
                    </div>
                </div>
            </div>
        </section>
        <section className='top-footer'>
            <div className='container-top-footer'>
                <div>
                    <p>Get in touch</p>
                    <p>Think we would be a good fit for your next project?</p>
                </div>
                <div>
                    <a href="">Get in touch</a>
                </div>
            </div>
        </section>
        <footer>
            <div className='footer-container'>
                <div className='logo-cont'>
                    <img src={logo} alt="" />
                    <div>
                    <p>Powered by Webflow</p>
                    <p>All rights reserved Wishbone+Partners, Inc. Licensing</p>
                    </div>
                </div>
                <div className='social-container'>
                    <img src={twt} alt="" />
                    <img src={inst} alt="" />
                    <img src={fbook} alt="" />
                </div>
            </div>
        </footer>
        </>
    )
}
export default Team