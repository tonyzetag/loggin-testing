'use client';

import React, { useState } from 'react';
import Form from '@/components/ui/form';

const App = () => {
    const [user, setUser] = useState('');

    const handleFormSubmit = (username: string) => {
        setUser(username);
        // Aquí puedes hacer más cosas con el nombre de usuario, como enviarlo a un servidor
    };

    return (
        <div>
            <Form onSubmit={handleFormSubmit} />
            {user && <p>Nombre de usuario: {user}</p>}
        </div>
    );
};

export default App;