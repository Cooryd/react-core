import React from 'react';
import FontAwesome from 'react-fontawesome';

export const PageNotFoundComponent = () => {
    return (
        <div className="app-error-container">
            <div className="app-notification-content">
                <div className="app-notification-icon">
                    <FontAwesome
                        name="exclamation-triangle"
                        size="5x"
                    />
                </div>
                <div className="app-notification-title">404</div>
                <small>This page does not exist.</small>
            </div>
        </div>
    );
};