import React from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => {
    return (
        <div className='chat-container'>
            <header className='chat-header'>
                <h1>
                    <i className='fas fa-smile'></i> Game of Things
                </h1>
                <Link to='./' className='btn'>
                    Leave Room
                </Link>
            </header>
            <div className='chat-sidebar'>
                <h3>
                    <i className='fas fa-comments'></i> Room Name:
                </h3>
                <h2 id='room-name'>Whatever</h2>
                <h3>
                    <i className='fas fa-users'></i> Users
                </h3>
                <ul id='users'>
                    <li>Brad</li>
                    <li>John</li>
                    <li>Mary</li>
                    <li>Paul</li>
                    <li>Mike</li>
                </ul>
            </div>
        </div>
    );
};

export default Lobby;
