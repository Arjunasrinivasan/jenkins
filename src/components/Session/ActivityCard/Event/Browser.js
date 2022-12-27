import React from 'react'
import EventContent from './Common/EventContent'
import EventHeader from './Common/EventHeader'

export default function Browser({ data }) {
	return (
		<div id='Browser' className='tab-pane show'>
			<div className='accordion'>
				{data['Browser resized'] ? (
					<div key={data['Browser resized']?.title}>
						<EventHeader
							icon='far fa-lg fa-expand'
							iconColor
							count={data['Browser resized']?.length}
							text='Browser resized'
							target='BrowserResized'
						/>
						<EventContent target='BrowserResized' data={data['Browser resized']} />
					</div>
				) : null}
				{data['Third-party application use'] ? (
					<div key={data['Third-party application use']?.title}>
						<EventHeader
							icon='far fa-lg fa-expand'
							iconColor
							count={data['Third-party application use']?.length}
							text='Third-party application use'
							target='ThirdPartyApplicationUse'
						/>
						<EventContent target='ThirdPartyApplicationUse' data={data['Third-party application use']} />
					</div>
				) : null}
			</div>
		</div>
	)
}
