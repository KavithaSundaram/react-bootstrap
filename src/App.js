import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () =>{
  return(
    <>
    <div className='navbar bg-primary d-flex mb-5'>
    <h1>City Tour</h1>
      <ul class="nav text-white">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Contact</a>
        </li>
    </ul>      
  </div>
    <div className="container">
      <div className="row">
        <div className='col-md-3'>
          <div class="card">
            <img src="https://source.unsplash.com/400x380/?newyork city?" class="card-img-top" alt="New York"/>
            <div class="card-body">
              <h5 class="card-title">NEW YORK</h5>
              <p class="card-text">New York city Special view</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card">
            <img src="https://source.unsplash.com/400x380/?paris city?" class="card-img-top" alt="Paris"/>
            <div class="card-body">
              <h5 class="card-title">PARIS</h5>
              <p class="card-text">Paris city Special view</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card">
            <img src="https://source.unsplash.com/400x380/?london city?" class="card-img-top" alt="london"/>
            <div class="card-body">
              <h5 class="card-title">LONDON</h5>
              <p class="card-text">London city Special view</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card">
            <img src="https://source.unsplash.com/400x380/?tokyo city?" class="card-img-top" alt="Tokyo"/>
            <div class="card-body">
              <h5 class="card-title">TOKYO</h5>
              <p class="card-text">Tokyo city Special view</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
