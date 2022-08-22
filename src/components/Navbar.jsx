import React from 'react'

export default function Navbar(props) {

  return (
    
      <nav className="navbar navbar-expand-lg navbar-light" style={props.mode==='dark'?{backgroundColor:'#423737', color:'white'}:{backgroundColor:'#f6eeee', color:'black'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>{props.home}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>{props.about}</a>
                    </li>
                </ul>
                <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="switchMode" onChange={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
                </div>
            </div>
        </div>
        </nav>
    
  )
}
