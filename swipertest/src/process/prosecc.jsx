import '../process/process.css'
import sketching from '../process/process_img/Sketching-Icon.png'
import finalizing from '../process/process_img/Finalizing-Icon.png'
import building from '../process/process_img/Building-Icon.png'

function Process(){
    return(
        <>
        <section className='process'>
            <div className='process-container'>
                <div className='title-process'>
                    <p>Our process</p>
                    <p>How we do what we do.</p>
                </div>
                <div className='main-text-process'>
                    <div>
                        <img src={sketching} alt="" />
                        <p>Sketching</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis.</p>
                    </div>
                    <div>
                        <img src={finalizing} alt="" />
                        <p>Finalizing</p>
                        <p>Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae.</p>
                    </div>
                    <div>
                        <img src={building} alt="" />
                        <p>Building</p>
                        <p>Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Process