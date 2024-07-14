'use client';

import Form from '@/components/ui/form';
import SingIn from '@/actions/auth-sing-in';

const App = () => {

    const handleFormSubmit = (username: string) => {
        SingIn(username, 'password', 'user');
        // Refresh the page to get the session object
        window.location.reload();
    };

    return (
        <div>
            <Form onSubmit={handleFormSubmit}/>
        </div>
    );
};

export default App;