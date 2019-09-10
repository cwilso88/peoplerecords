import React from 'react';

const Header = (props) => {
    const { branding } = props;
    return (
        <header>
            <div className="container">
              <h1>{branding}</h1>
            </div>
        </header>
    )
}

export default Header;
