import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='join-container'>
            <header className='join-header'>
                <h1>
                    <i className='fas fa-smile'></i> Game of Things
                </h1>
            </header>
            <main className='join-main'>
                <form>
                    <div className='form-control'>
                        <label for='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            placeholder='Enter username...'
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label for='room'>Room</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            placeholder='Enter roomcode...'
                            required
                        />
                    </div>
                    <Link to='/lobby'>
                        <button type='submit' className='btn'>
                            Join Game
                        </button>
                    </Link>
                    <Link to='/lobby'>
                        <button type='submit' className='btn'>
                            Create Room
                        </button>
                    </Link>
                </form>
            </main>
        </div>
    );
};

export default Landing;
