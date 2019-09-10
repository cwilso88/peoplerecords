import React from 'react';

const Header = (props) => {
    const { branding, subtitle } = props;
    return (
        <header className="mt-5 text-center">
            <div className="container">
              <h3>{branding}</h3>
              <h5 className="text-secondary">{subtitle}</h5>
            </div>
        </header>
    )
}

export default Header;
