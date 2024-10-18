import '../our_firm/firm.css'
import people from '../our_firm/firm_img/people.png'

function Firm(){
    return(
        <>
        <section className='firm'>
            <div className='main-firm'>
                <div className='title-firm'>
                    <p>Our firm</p>
                </div>
                <div className='main-text-firm'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <div className='photo-container-firm'>
                        <img src={people} alt="" />
                        <p>Stephen Collier <span>Senior Partner</span></p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Firm