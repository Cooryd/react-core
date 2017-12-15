import React from 'react';
import FontAwesome from 'react-fontawesome';

export const FetchingUser = () => {
    return (
        <div className="app-loading-spinner-container">
            <div className="app-notification-content">
                <div className="app-notification-icon">
                    <FontAwesome
                        name="circle-o-notch"
                        size="5x"
                        spin />
                </div>
                <div>Fetching details...</div>
            </div>
        </div>
    );
};