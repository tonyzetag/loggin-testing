import React, { useState } from 'react';
import { z } from 'zod';
import {UserSchema} from '@/schemas/index'

interface FormProps {
    onSubmit: (username: string) => void;
}

type FormValues = z.infer<typeof UserSchema>;

const Form: React.FC<FormProps> = ({ onSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formValues: FormValues = { username, password };
        const validationResult = UserSchema.safeParse(formValues);

        if (validationResult.success) {
            onSubmit(username);
        } else {
            console.log(validationResult.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;