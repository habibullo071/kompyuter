import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {

    return (
        <div>
            <div className="hero">
                <div className="ilovalar">
                    <Link to='/etotkompyuter'>
                        <button>
                            <img src="http://res-2.cloudinary.com/dthpuve6t/image/upload/q_auto/v1/blog-images/export-1.png" alt="" className='etot' />
                        </button>
                    </Link>
                    <Link to='/excel'>
                        <button>
                            <img src="https://avatars.yandex.net/get-music-user-playlist/30088/45961879.1035.58476/m1000x1000?1575965948097&webp=false" alt="" className='etot' />
                        </button>
                    </Link>
                    <Link to='/file'>
                        <button>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Icons8_flat_folder.svg/1200px-Icons8_flat_folder.svg.png" alt="" className='etot' />
                        </button>
                    </Link>
                    <Link to='/vscode'>
                        <button>
                            <img src="https://avatars.mds.yandex.net/i?id=413f8ae47cb8460a4a2991f1131fa40f1bdb6af1-8497815-images-thumbs&n=13" alt="" className='etot' />
                        </button>
                    </Link>
                    <Link to='/korzina'>
                        <button>
                            <img src="https://p7.hiclipart.com/preview/537/831/629/recycling-bin-trash-windows-7-rubbish-bins-waste-paper-baskets-computer-icons-others.jpg" alt="" className='etot' />
                        </button>
                    </Link>
                    <Link to='/word'>
                        <button>
                            <img src="https://avatars.mds.yandex.net/i?id=ed41a4ab2b16adaf358ac5ed004135026baebe1f-7760121-images-thumbs&n=13" alt="" className='etot' />
                        </button>
                    </Link>
                    <Link to='/chrome'>
                        <button>
                            <img src="https://avatars.mds.yandex.net/i?id=e08ad27d7cee581c6515405899fed552b34629af-4146484-images-thumbs&n=13" alt="" className='etot' />
                        </button>
                    </Link>
                    <Link to='/telegram'>
                        <button>
                            <img src="https://static.insales-cdn.com/r/mvxshetFdf0/rs:fit:1920:1920:1/plain/files/1/6328/19921080/original/telegram-logo.png@jpg" alt="" className='etot' />
                        </button>
                    </Link>
                    <Link to='/aim'>
                        <button >
                            <img src="https://banner2.cleanpng.com/20180429/aee/kisspng-aimp-comparison-of-audio-player-software-media-pla-subscribe-youtube-button-5ae5acb8940132.8604585115250014006062.jpg" alt="" className='etot' />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="navbar">

            </div>
        </div>
    )
}

export default Home