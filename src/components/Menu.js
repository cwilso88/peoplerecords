import React from 'react';

const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i class="fas fa-search"></i>
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
