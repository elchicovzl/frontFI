import Container from "../components/Container";

const PrivacyPage: React.FC = () => {

    return ( 
        <Container>
            <h2 className="text-center font-semibold">AVISO DE PRIVACIDAD</h2>
            <div className="w-9/12 mx-auto">
                <p className="pt-5"><b>Bienes Raíces La Frontera S.A.S.</b>, en cumplimiento de lo previsto en la Ley 1581 de 2012 “Por la cual se dictan disposiciones generales para la protección de datos personales” y del Decreto 1377 de 2013, cuyos textos pueden ser consultados en www.froninmocol.com ponemos a su disposición el presente Aviso de Privacidad que busca informar al Titular de datos personales acerca de la existencia de las Políticas de Tratamiento de información que han sido adoptadas por LA COMPAÑÍA, la forma de acceder a éstas y las características del Tratamiento que se le pretende dar a los datos.</p>
                <h3 className="text-left pb-5 pt-5 font-semibold">1.- UBICACIÓN.</h3>
                <p>El domicilio social de LA COMPAÑIA está ubicado en la Carrera 51 B # 119-71 en la ciudad de Medellín- Antioquia. y esta tiene dispuesto como canal de contacto con sus clientes y usuarios, comunicación escrita dirigida a su domicilio, Gerencia Administrativa.</p>
                <h3 className="text-left pb-5 pt-5 font-semibold">2. TRATAMIENTO DE LOS DATOS ADMINISTRADOS POR LAS COMPAŃIAS.</h3>
                <p>LA COMPAÑIA ha identificado los datos que administra, así como las actividades que desarrollan con dichos datos, en particular su recepción, conservación, disposición para los fines propios de la relación comercial, así como los productos y servicios ofrecidos por esta compañía. 
                La empresa <b>Bienes Raíces La Frontera S.A.S</b>. en desarrollo de su objeto social y para la correcta validación del estado del riesgo de los futuros propietarios, vendedores, compradores o clientes, recolecta y administra información sobre datos personales, comerciales y de capacidad crediticia.</p>
                <h3 className="text-left pb-5 pt-5 font-semibold">3. FINALIDADES DEL TRATAMIENTO DE DATOS.</h3>
                <p>Las finalidades del Tratamiento de datos personales suministrados por nuestros clientes y usuarios son:</p>
                <p>Los datos recogidos por LA COMPAÑIA serán utilizados para los fines propios de la relación comercial de arrendamiento, administración de los bienes inmuebles, corretaje inmobiliario y para los servicios de asesoría inmobiliaria integral y cobranza.</p>
                <p>Entre dichos fines se encuentran: la evaluación del estado del riesgo, la actualización de la información recogida, la consulta y reporte en centrales de riesgo, el cobro de las comisiones por administración, comisiones de corretaje inmobiliario (ventas) y el cobro de los distintos servicios relacionados e integrales que se prestan por parte de la compañía.</p>
                <p>Igualmente, los datos serán utilizados para el desarrollo de actividades de conocimiento del perfil comercial del cliente, campañas comerciales, publicitarias y de marketing, relacionadas con productos de la compañía.</p>
                <h3 className="text-left pb-5 pt-5 font-semibold">3.1. Las finalidades previstas para los datos obtenidos de candidatos, empleados y proveedores.</h3>
                <p>La información de la hoja de vida de los candidatos servirá para que la Compañía se forme una opinión sobre las calidades de la persona.</p>
                <p>Los datos recogidos de los empleados tienen como finalidad desarrollar las relaciones laborales que existan con éstos. Entre ellas, hacerlos partícipes de las actividades de bienestar previstas por LA COMPAÑIA.</p>
                <p>En el caso de los Proveedores, personas naturales, de LA COMPAÑIA se busca conocer y hacer seguimiento a la idoneidad financiera y al comportamiento comercial de éstos. Así como, hacerlos partícipes de actividades o campañas que puedan resultar de su interés.</p>
                <h3 className="text-left pb-5 pt-5 font-semibold">4. DERECHOS DE LOS TITULARES</h3>
                <p>Como Titular de datos personales usted tiene los siguientes derechos:</p>
                <ul>
                    <li className="ml-5">
                        <p>a. Conocer, actualizar y rectificar sus datos personales frente a los Responsables del Tratamiento o Encargados del Tratamiento. Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado;</p>
                    </li>
                    <li className="ml-5">
                        <p>b. Solicitar prueba de la autorización otorgada al Responsable del Tratamiento salvo cuando expresamente se exceptúe como requisito para el Tratamiento, de conformidad con lo previsto en el artículo 10 de la presente ley;</p>
                    </li>
                    <li className="ml-5">
                        <p>c. Ser informado por el Responsable del Tratamiento o el Encargado del Tratamiento, previa solicitud, respecto del uso que le ha dado a sus datos personales</p>
                    </li>
                    <li className="ml-5">
                        <p>d. Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la presente ley y las demás normas que la modifiquen, adicionen o complementen;</p>
                    </li>
                    <li className="ml-5">
                        <p>e. Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá cuando la Superintendencia de Industria y Comercio haya determinado que en el Tratamiento el Responsable o Encargado han incurrido en conductas contrarias a esta ley y a la Constitución;</p>
                    </li>
                    <li className="ml-5"><p>f. Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.</p></li>
                </ul>
                <h3 className="text-left pb-5 pt-5 font-semibold">5. CAMBIOS EN LAS POLITICAS O EN EL AVISO DE PRIVACIDAD</h3>
                <p>Las Políticas de Tratamiento están disponibles en la página web www.froninmocol.com y cualquier cambio sustancial en las mismas será informado a través de este mismo medio, y posteriormente, en cualquier otro que se considere pertinente.
                Los cambios sustanciales que se produzcan en el Aviso de privacidad se informarán de manera oportuna por el mismo medio virtual.
                </p>
            </div>
        </Container>
    );
}
 
export default PrivacyPage;