import React from 'react';
import FontAwesome from 'react-fontawesome';

export const ErrorFetching = () => {
    return (
        <div className="app-error-container">
            <div className="app-notification-content">
                <div className="app-notification-icon">
                    <FontAwesome
                        name="exclamation-triangle"
                        size="5x"
                    />
                </div>
                <div className="app-notification-title">500</div>
                <small>Something went wrong, please try refreshing</small>
            </div>
        </div>
    );
};