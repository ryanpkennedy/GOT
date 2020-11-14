import React from 'react';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom';

const Lobby = () => {
    return (
        <div className='chat-container'>
            <div className='chat-sidebar'>
                <h3>
                    <i className='fas fa-comments'></i> Room Name:
                </h3>
                <h2 id='room-name'>Whatever</h2>
                <h3>
                    <i className='fas fa-users'></i> Users
                </h3>
                <ul id='users'>
                    {/* {users.name.map(player => (
                        <li>{player}</li>
                    ))} */}

                    {/* <li>Brad</li>
                    <li>John</li>
                    <li>Mary</li>
                    <li>Paul</li>
                    <li>Mike</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Lobby;
