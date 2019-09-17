import React from 'react';

const Menu = () => {
    return (
        <div id="menu">
            <nav className="navbar navbar-light bg-light p-3">    
                <div className="navbar-brand" href="#">
                    <img src={require('./../images/logo.jpg')} alt="logo"/>
                </div>         
                <form className="form-inline mr-5">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text text-white" id="basic-addon1">
                            <i className="fas fa-search"></i>
                        </span>
                        </div>
                    <input type="text" className="form-control" placeholder="Search people records" aria-label="SearchPeopleRecords" aria-describedby="basic-addon1"/>
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default Menu;
