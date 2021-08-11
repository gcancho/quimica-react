import ServiciosCard from "./ServiciosCard";
import { faTruck, faHeadset, faLeaf, faWallet } from '@fortawesome/free-solid-svg-icons';

const Servicios = () => {
    return ( 
        <article className="servicios">
            <div className="servicios__wrap wrap">
                <ServiciosCard icono={faTruck} titulo="Envío gratis" descripcion="Por compras mayores a S/300"/>
                <ServiciosCard icono={faLeaf} titulo="Cuidado ambiental" descripcion="Con aditivos biodegradables"/>
                <ServiciosCard icono={faHeadset} titulo="Asesoría técnica 360" descripcion="Asesoría para cada cliente"/>
                <ServiciosCard icono={faWallet} titulo="Pago seguro" descripcion="Comprar aquí es 100% seguro" cuentas={true}/>
            </div>
        </article>
     );
}
 
export default Servicios;