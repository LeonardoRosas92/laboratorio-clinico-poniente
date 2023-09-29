export default function Terms() {
  //const { estudio } = useParams();
  // const { date } = useParams();
  return (
    <>
      <>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalInfo"
          data-bs-whatever="@getbootstrap"
          className="btn btn-info2"
        >
          <i className="bi bi-terms me-1"></i>
          Ver
        </button>

        <div
          className="modal fade"
          id="exampleModalInfo"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title fs-5"></h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="row content">
                  <div className="row d-flex justify-content-align">
                    <div className="col-6 " >
                      <h3 >Aviso de Privacidad</h3>
                    </div>
                    <p>Laboratorio Clínico Poniente</p>
                    <p>Fecha de entrada en vigor: Viernes, 29 de Septiembre del 2023.</p>

                    <p>En **Laboratorio Clínico Poniente**, estamos comprometidos con la protección de su privacidad y la seguridad de sus datos personales. Este aviso de privacidad tiene como objetivo informarle sobre cómo recopilamos, utilizamos y protegemos la información que usted nos proporciona a través de nuestro sitio web y otros canales de comunicación.</p>
                    
                    <p> 1. Responsable de sus datos personales</p>

                    <p>El responsable de sus datos personales es **Laboratorio Clínico Poniente**, con domicilio en Calle 16 Por 23, Fraccionamiento Mulsay, Mérida Yucatán, 97249, México, y número de teléfono +529993303828 o bien, +529991609043. Puede ponerse en contacto con nosotros a través de la siguiente dirección de correo electrónico: laboratorioclinicoponiente@gmail.com</p>
                    
                    <p>2. Datos personales que recopilamos</p>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-around m-0 p-4">
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
