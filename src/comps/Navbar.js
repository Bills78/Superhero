import React from "react";

function Nav() {
    return (
        <div className='navbar'>
            <div className='titles'>
                <a href="/"><h1>Supers</h1></a>
                <h3>No Zeroes, Only Heroes</h3>
            </div>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/allheroes'>All Supers</a>
            </div>
        </div>
    )
}

export default Nav;