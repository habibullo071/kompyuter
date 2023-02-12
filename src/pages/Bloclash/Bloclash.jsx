import React from 'react'
import { Link } from 'react-router-dom'
import './Bloclash.css'
function Bloclash() {
    return (
        <div className='Bloclash'>
            <img src="https://yt3.ggpht.com/-Stjzx0ja_Jnm8D9W3SkkBz-T3lT2yih9juKJoeJ4JDfTUNBG0A5-bqzFr1UVYvC547g20vJXw=s900-c-k-c0x00ffffff-no-rj" alt="" className='users' />
            <h1 className='h1'>Habibullo</h1>
            <input type="text" />
            <Link to='/home'>
                <button type='submit' className='btn'><i class="bi bi-arrow-right"></i></button>
            </Link>
            <div className="bloc__footer">
                <button className='button'>
                    <h3>ENG</h3>
                </button>
                <button className='button'>
                    <img src="https://avatars.mds.yandex.net/i?
id=34e52140c4b95a0f6245f9f1c8684778-4600903-images-thumbs&n=13" alt=""
                        className='bloc__img' />
                </button>
                <button className='button'>
                    <img src="https://avatars.mds.yandex.net/i?
id=d7f4c75be93c208af20119a117e3732e6c14eb45-8194355-images-thumbs&n=13"
                        alt="" className='bloc__img' />
                </button>
            </div>
        </div>
    )
}

export default Bloclash