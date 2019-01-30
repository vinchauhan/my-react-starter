import React from 'react'
import './Nav.scss'

export class Nav extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-light navbar-expand-lg bg-light py-3 px-5">
                <a class="navbar-brand" href="#">ClinicalTrials</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <div class="navbar-nav nav-fill w-75 mx-auto">
                        <a className="nav-item nav-link active custom-link" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">Trials</a>
                        <a className="nav-item nav-link" href="#">Phases</a>
                    </div>
                </div>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}