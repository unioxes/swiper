import logo from '../header/header_img/logo.png'
import '../header/header.css'
import mainimg from '../header/header_img/img_header.png'

function Header(){
    return(
        <>
        <header>
            <nav>
                <div className='nav-container'>
                    <div className='logo-container'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='links-container'>
                        <a href="">Projects</a>
                        <a href="">About</a>
                        <a href="">News</a>
                        <a href="">Team</a>
                        <a href="">Contact</a>
                        <button>Get template</button>
                    </div>
                </div>
            </nav>
            <div className='main-header'>
                <div className='container-text'>
                    <div className='text'>
                        <p>Wishbone+Partners</p>
                        <p>The home of beautiful architecture.</p>
                        <p>We are an architecture firm with a focus on beautiful but functional design. At its heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read more about our previous projects, our process and our team below.</p>
                        <a href="">Read more</a>
                    </div>
                </div>
                <div className='container-img'>
                    <img src={mainimg} alt="" />
                </div>
            </div>
        </header>
        </>
    )
}
export default Header