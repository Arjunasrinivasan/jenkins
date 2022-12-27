import React from 'react'

export default function EventHeader({ icon, iconColor, count, text, target }) {
	return (
		<div className='p-0 bg-white card-header'>
			<button
				className='btn-block text-left p-3 text-decoration-none btn btn-link'
				type='button'
				data-toggle='collapse'
				data-target={`#${target}`}
				aria-expanded='false'
			>
				<div className='row'>
					<div className='col-1 p-0'>
						<div className='text-primary h-100 text-center d-flex align-items-center justify-content-center'>
							<span key={icon} className={`${iconColor ? 'text-warning' : null}`}>
								{icon ? <i className={icon} /> : null}
							</span>
						</div>
					</div>
					<div className='col-11'>
						<div className='media-heading mb-0'>
							<span className='badge badge-secondary d-inline mr-2'>{count}</span>
							{text}
						</div>
					</div>
				</div>
			</button>
		</div>
	)
}
