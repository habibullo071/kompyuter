import React from 'react'
import { Link } from 'react-router-dom'
import './Vscode.css'
function Vscode() {
  return (
    <div className='Vscode'>
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
          <Link to='/vscodefull'>
            <li className='hover'><i class="bi bi-app"></i></li>
          </Link>
          <Link to='/home'>
            <li className='red'><i class="bi bi-x-lg"></i></li>
          </Link>
        </ul>
      </div>
      <div className="navbar">
          <div className="topp">
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
            <button className='but'>
              <img src="http://cdn.onlinewebfonts.com/svg/img_78683.png" alt="" className='parametr' />
            </button>
          </div>
        </div>
      <div className="files">

      </div>
      <div className="main">

      </div>
      <div className="terminal">

      </div>
    </div>
  )
}

export default Vscode