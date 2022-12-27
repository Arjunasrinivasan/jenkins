import React from 'react'
import Event from './Event'

export default function ActivityCard({ data }) {
	const [open, setOpen] = React.useState(true)

	const NavLink = ({ value, isActive }) => {
		return (
			<a
				className={`nav-link ${isActive ? 'active' : null}`}
				href={`#${value}`}
				role='button'
				data-toggle='tab'
				aria-controls={value}
			>
				{value}
			</a>
		)
	}

	return (
		<div id='incidents-dashboard'>
			<div>
				<div>
					<div className='card mb-4'>
						<div
							className='card-header collapsible cursor-pointer'
							type='button'
							data-toggle='collapse'
							data-target='#incidents'
							aria-expanded='true'
							onClick={() => setOpen(!open)}
						>
							<span className='mr-2' key={open}>
								<i className={`fa fa-${open ? 'minus' : 'plus'}`} />
							</span>
							Activity
							<div className='float-right' />
						</div>
						<div id='incidents' className={`collapse ${open ? 'show' : null}`}>
							<div className='row'>
								<div className='col-md-12'>
									<div className='p-1 nav nav-pills nav-justified'>
										<NavLink isActive value='General' />
										<NavLink value='Prechecks' />
										<NavLink value='Browser' />
										<NavLink value='Scores' />
									</div>
								</div>
							</div>
							<div>
								<div className='tab-content'>
									<Event data={data} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
