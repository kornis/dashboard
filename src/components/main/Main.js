import React from 'react'
import ReactDOM from 'react-dom'
import FirstRow from './FirstRow'
import LastProduct from './LastProduct'
import CategoriesDatabase from './categories/CategoriesDatabase'

function Main()
{
    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					
					<FirstRow />

					
					<div className="row">
						
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<LastProduct />
							</div>
						</div>

						<CategoriesDatabase />
						
					</div>
                    </div>
    )
}

export default Main;