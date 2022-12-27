import * as React from 'react'
import Images from './Images'
import Recordings from './Recordings'
import Screenshots from './Screenshots'
import Videos from './Videos'

export default function MediaModal({ data }) {
	// Components
	const ListItem = ({ isActive, text, hrefText }) => {
		return (
			<li className='nav-item'>
				<a className={`nav-link ${isActive ? 'active' : null}`} data-toggle='tab' href={`#${hrefText}`}>
					{text}
				</a>
			</li>
		)
	}

	return (
		<div
			id='media-modal'
			className='modal fade'
			aria-hidden='true'
			aria-labelledby='media-label'
			data-attribute='b5681976-bc51-473b-b03f-6b95a1ac047a'
			data-permission='false'
			tabIndex='-1'
		>
			<div className='modal-dialog modal-lg'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h4 id='media-label' className='modal-title'>
							Media
						</h4>
						<button className='close' aria-hidden='true' data-dismiss='modal' type='button'>
							×
						</button>
					</div>
					<div className='modal-body'>
						<ul className='nav nav-tabs'>
							<ListItem isActive text='Images' hrefText='images' />
							<ListItem text='Videos' hrefText='videos' />
							<ListItem text='Screenshots' hrefText='screenshots' />
							<ListItem text='Screen Recordings' hrefText='recordings' />
						</ul>
						<div className='card border-0'>
							<div className='card-body tab-content js-tab-content-media'>
								<Images data={data} />
								<div id='videos' className='tab-pane'>
									<Videos data={data} />
								</div>
								<div id='screenshots' className='tab-pane'>
									<Screenshots data={data} />
								</div>
								<div id='recordings' className='tab-pane'>
									<Recordings data={data} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
