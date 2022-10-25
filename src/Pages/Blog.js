import React from 'react';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <h2 className='text-2xl font-bold'>Welcome to My Blog. </h2>
            <div className="flex flex-col w-full p-2">
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>1. What is cors?</h3>
                    <p>
                        Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.<br></br>
                        A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>2. Why are you using Firebase? What other options does you have to implement authentication?</h3>
                    <p>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.<br></br><br></br>
                        User Authentication Platforms Firebase Alternatives--
                        * STYTCH.  * Ory.  * Supabase.  * Okta.  * PingIdentity.  * Keycloak.  * Frontegg.  * Authress.  * Auth0.  * Amazon Cognito.  * OneLogin.  * Passport.  * MongoDB. <br></br>
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>3. How does the private route works?</h3>
                    <p>
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated).
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>4. What is Node? How does Node works?</h3>
                    <p>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br></br>
                        <br></br>
                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        Node.js basically works on two concept
                        *Asynchronous
                        *Non-blocking I/O
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;