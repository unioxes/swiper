import '../staircase/staircase.css'
import logo_one from '../staircase/staircase_img/Logo-Group-3.png'
import logo_two from '../staircase/staircase_img/Logo-Group-6.png'
import logo_three from '../staircase/staircase_img/Logo-Group-8.png'
import logo_four from '../staircase/staircase_img/Logo-Group-10.png'


function Staircase(){
    return(
        <>
            <section className='staircase'>
            <div className='main-staircase'>
            <div className='staircase-text'>
                <div className='main-text-staircase'>
                <p>The marble staircase</p>
                <p>Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.</p>
                </div> 
            </div>
            </div>
            <div className='customers'>
                <div className='container-customers'>
                    <div className='text-left'>
                        <p>prior clients</p>
                        <p>Happy customers.</p>
                        <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
                    </div>
                    <div className='logos-right'>
                        <div>
                            <img src={logo_one} alt="" />
                        </div>
                        <div>
                            <img src={logo_four} alt="" />
                        </div>
                        <div>
                            <img src={logo_three} alt="" />
                        </div>
                        <div>
                            <img src={logo_two} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Staircase