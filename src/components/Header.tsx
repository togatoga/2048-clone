import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-row">
                <h1>2048</h1>
                <div className="header-scores">
                    <div className="header-scores-score">
                        <div>Score</div>
                        <div>110</div>
                    </div>
                </div>
                <div className="header-scores-score">
                    <div>Best</div>
                    <div>99999999</div>
                </div>
            </div>
        </div>
    )
};

export default Header;