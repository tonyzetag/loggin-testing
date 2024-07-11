import React from 'react';
import Button from '@/components/ui/button';

const HomeButton = () => {

    const text = "Get Started";
    const consoleMessage = "Home button clicked!";

    return (
        <Button 
        text={text} 
        consoleMessage={consoleMessage} 
        href='/auth/login'
        whiteButton>
        </Button>
    );
};

export default HomeButton;