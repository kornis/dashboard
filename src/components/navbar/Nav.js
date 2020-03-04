import React from 'react'
import ReactDOM from 'react-dom'
import Notifications from './NavNotification';
import Envelope from './NavEnvelope';
import User from './NavUser';

function Nav()
{
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					
					<ul className="navbar-nav ml-auto">

					<Notifications />
						
						
						<Envelope />

						<div className="topbar-divider d-none d-sm-block"></div>

						
						<User />

					</ul>

				</nav>
    )
}

export default Nav;