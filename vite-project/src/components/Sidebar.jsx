import SocialNetworks from './SocialNetworks';import Avatar from '../img/fran.jpg'
import '../styles/components/sidebar.sass'

const SideBar= () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Franciene Vaz'/>
            <p className="title">Desenvolvedora</p>
            <SocialNetworks/>
            <p>informações de contato</p>
            <a href="#" className="btn">
                Download curriculo
            </a>
        </aside>
    )
}

export default SideBar;