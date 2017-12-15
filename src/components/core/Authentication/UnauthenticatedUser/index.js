import React from 'react';
import FontAwesome from 'react-fontawesome';

export const UnauthenticatedUser = () => {
    return (
        <div className="app-error-container">
            <div className="app-notification-content">
                <div className="app-notification-icon">
                    <FontAwesome
                        name="exclamation-triangle"
                        size="5x"
                    />
                </div>
                <div className="app-notification-title">401</div>
                <small>Unable to authenticate your user</small>
            </div>
        </div>
    );
};