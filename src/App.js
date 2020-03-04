import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Nav from './components/navbar/Nav'
import Main from './components/main/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div id="wrapper">

		<Sidebar />
		
		<div id="content-wrapper" className="d-flex flex-column">
			
			<div id="content">
	
				<Nav />	

				<Main />				
		
			</div>

			<Footer />
	
		</div>

	</div>
  );
}

export default App;
