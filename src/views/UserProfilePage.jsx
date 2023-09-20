import StudyCard from '../components/StudyCard';
export default function UserProfilePage() {
  return (
    <>
    <div className="container my-5 px-0">
        
        <div className="row col-12 d-flex justify-content-center align-items-center m-0">
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end mb-2">
            <img className='profilepic' src="https://plus.unsplash.com/premium_photo-1677178628425-84a64dc416b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start">
            <h3>Nombre: </h3>
            <h3>Fecha de nacimiento:</h3>
            <h3>SEXO:</h3>
            <h3>Correo electrónico:</h3>
        </div>
        </div>
       

    </div>
    <div className="container my-5 px-0 tarjeta2">
        <div className="d-flex justify-content-center align-items-center tarjeta">
          <h3>MIS RESULTADOS</h3>
        </div>
        <div className="m-4">
          < StudyCard />
          <div className="row  mx-2">
       
          </div>
        </div>
      </div>
    </>
  )
}
