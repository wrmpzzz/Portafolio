import * as React from 'react'

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => {
    return (
        <div>
            <h1>Message from {name}</h1>
            <p>Message: {message}</p>
            <p>Email: {email}</p>
        </div>
    );
};
