import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FooterItem = ({ titulo, texto, texto2, icono }) => {
    return (
        <>
            <article className="footer__item">
                <h4>{titulo}</h4>
                <span><FontAwesomeIcon icon={icono} />{texto}</span>
                {(texto2) ?
                    <span className="texto2" ><FontAwesomeIcon />{texto2}</span>
                    :
                    <></>
                }
            </article>
        </>
    );
}

export default FooterItem;