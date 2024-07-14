import React from 'react';
import { auth } from "@/auth"

async function test() {
    const session = await auth()

    if (!session) {
        return (
            <p>Not logged in</p>
        )
    } else {
        return (
            <p>Logged in</p>
        )
    }
}


const HomePage = async () => {

    const session = await auth()
    const username = session?.user?.name;

    return (
        <div>
            <h1>Welcome {username}</h1>
            {test()}
        </div>
    );
};

export default HomePage;