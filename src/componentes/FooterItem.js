import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FooterItem = ({titulo,texto, icono}) => {
    return (
        <>
            <article className="footer__item">
                <h4>{titulo}</h4>
                <span><FontAwesomeIcon icon={icono} />{texto}</span>
            </article>
        </>
    );
}

export default FooterItem;