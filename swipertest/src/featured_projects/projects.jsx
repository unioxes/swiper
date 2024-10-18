import '../featured_projects/projects.css'
import img1 from '../featured_projects/projects_img/IMAGE1.png'
import img2 from '../featured_projects/projects_img/IMAGE2.png'
import img3 from '../featured_projects/projects_img/IMAGE3.png'

function Projects(){
    return(
        <>
        <section className='projects'>
            <div className='projects-container'>
                <div className='title-projects'>
                    <p>Featured projects</p>
                    <p>Some of the latest and greatest projects from us here at Wishbone+Partners.</p>
                </div>
                <div className='img-projects'>
                    <div>
                        <img src={img1} alt="" />
                        <div className='text-on'>
                            <div className='text-on-container'>
                                <div>
                                <p>New York</p>
                                <p>Big Road Brewery</p>
                                </div>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className='link-projects'>
                    <a href="">View all projects</a>
                </div>
            </div>
        </section>
        </>
    )
}
export default Projects