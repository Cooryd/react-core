import React from 'react';
import FontAwesome from 'react-fontawesome';

export const UnauthorisedUser = () => {
    return (
        <div className="app-error-container">
            <div className="app-notification-content">
                <div className="app-notification-icon">
                    <FontAwesome
                        name="exclamation-triangle"
                        size="5x"
                    />
                </div>
                <div className="app-notification-title">403</div>
                <small>You do not have permission to view this resource</small>
            </div>
        </div>
    );
};