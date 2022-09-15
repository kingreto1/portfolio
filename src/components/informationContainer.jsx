import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationContainer.sass';

const Informations = [
    { type: 'Telefone', icon: <AiFillPhone id='phone-icon' />, content: '(96) 99100-4870'},
    { type: 'E-mail', icon: <AiOutlineMail id='email-icon' />, content: 'gabrimelo070@gmail.com'},
    { type: 'Localização', icon: <AiFillEnvironment id='pin-icon' />, content: 'Afuá / PA'},
]

const InformationContainer = () => {
  return (
    <section id="information">
        {Informations.map((info) => (
            <div className="info-card">
                {info.icon}
                <div>
                    <h3>{info.type}</h3>
                    <p>{info.content}</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default InformationContainer;