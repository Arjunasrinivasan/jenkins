import React from 'react'

export default function Screenshots({ data }) {
	return (
		<div>
			{
				data.payload.data.attributes.screenshots.length === 0 &&
				<span>Sorry, no screenshots available.</span>
			}
			<ul className='image-grid list-unstyled row'>
				{data.payload.data.attributes.screenshots.map(el => (
					<li className='col-md-4 mb-4' key={el}>
						<div id='screenshot_2984778061' className='view-media-screenshot'>
							<div className='js-view-media'>
								<img className='rounded img-thumbnail' src={el} alt='ALT' />
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
