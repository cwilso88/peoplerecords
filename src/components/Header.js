import React from 'react';

const Header = (props) => {
    const { branding, subtitle } = props;
    return (
        <header className="mt-5">
            <div className="container">
              <h1>{branding}</h1>
              <h4>{subtitle}</h4>
              <hr />
            </div>
        </header>
    )
}

export default Header;
