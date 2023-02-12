import React from 'react'
import { Link } from 'react-router-dom'
import './Vscodefull.css'
function Vscodefull() {
    return (
        <div className='Vscodefull'>
            <div className="nav">
                <img src="https://avatars.mds.yandex.net/i?id=bbbcf0b5f6452838a80f2b3fb59ec511b6206e1c-4275079-images-thumbs&n=13" alt="" className='vs' />
                <ul className='nav__ul'>
                    <li className='nav__li'><b>File</b></li>
                    <li className='nav__li'><b>Edit</b></li>
                    <li className='nav__li'><b>Selection</b></li>
                    <li className='nav__li'><b>View</b></li>
                    <li className='nav__li'><b>Go</b></li>
                    <li className='nav__li'><b>Run</b></li>
                    <li className='nav__li'><b>Terminal</b></li>
                    <li className='nav__li'><b>Help</b></li>
                    <p className='nav__p'>Vscode.jsx - kompyuter - Visual Studio Code</p>
                </ul>
                <ul className='nav__vihod'>
                    <Link to='/home'>
                        <li className='hover'><i class="bi bi-dash"></i></li>
                    </Link>
                    <Link to='/vscode'>
                        <li className='hover'><i class="bi bi-app"></i></li>
                    </Link>
                    <Link to='/home'>
                        <li className='red'><i class="bi bi-x-lg"></i></li>
                    </Link>
                </ul>
            </div>
            <div className="df">
                <div className="navbar">
                    <div className="top">
                        <button>
                            <img src="https://w7.pngwing.com/pngs/806/948/png-transparent-computer-icons-pdf-computer-software-exe-torn-edges-border-angle-rectangle-pdf.png" alt="" className='top__img' />
                        </button>
                        <button>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_334150.png" alt="" className='search' />
                        </button>
                        <button>
                            <img src="https://e7.pngegg.com/pngimages/111/39/png-clipart-micro-usb-computer-icons-thunderbolt-symbol-usb-usb-computer-icons.png" alt="" className='usb' />
                        </button>
                        <button>
                            <img src="https://cdn.onlinewebfonts.com/svg/download_35506.png" alt="" className='cubik' />
                        </button>
                    </div>
                    <div className="navbar__footer">
                        <button>
                            <img src="https://w7.pngwing.com/pngs/722/101/png-transparent-computer-icons-user-profile-circle-abstract-miscellaneous-rim-account.png" alt="" className='user__icon' />
                        </button>
                        <button>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_78683.png" alt="" className='parametr' />
                        </button>
                    </div>
                </div>
                <div className="files">
                    <h6><div className="h5">
                        <h5>EXPLORER</h5>
                    </div>
                    </h6>
                    <ul className='navbar__files'>
                        <div className="b"><b>KOMPYUTER</b></div>
                        <li className='m-left' >
                            <b>
                                node_modules
                            </b>
                        </li>
                        <li className='m-left' >
                            <b>
                                public
                            </b>
                        </li>
                        <li className='m-left' >
                            <b>
                                src
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                companents
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                pages
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                App.css
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                App.jsx
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                App.test.js
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                index.html
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                index.js
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                .gitignire
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                package-loc...
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                package.json
                            </b>
                        </li>
                        <li className='ul_li'>
                            <b>
                                README.md
                            </b>
                        </li>
                        <div className="line">
                            <li className='ul_il'>
                                OUTLINE
                            </li>
                            <li className='ul_il'>
                                TIMELINE
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="main">

            </div>
            <div className="terminal">

            </div>
        </div>
    )
}

export default Vscodefull