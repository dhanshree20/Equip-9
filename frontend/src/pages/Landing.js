import React from 'react';

function Landing() {
    const user = JSON.parse(localStorage.getItem('user'));
    const greeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    return <h1>{`${greeting()}, ${user.firstName} ${user.lastName}`}</h1>;
}

export default Landing;