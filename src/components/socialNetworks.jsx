import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import '../styles/components/socialNetworks.sass';

const socialNetworks = [
    { name: 'github', icon: <FaGithub/>, href: 'https://github.com/kingreto1' },
    { name: 'linkedin', icon: <FaLinkedinIn/>, href: 'https://www.linkedin.com/in/gabriel-melo-kng/' },
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        { socialNetworks.map((network) => (
            <a target="_blank" href={network.href} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        )) }
    </section>
)
}

export default SocialNetworks;