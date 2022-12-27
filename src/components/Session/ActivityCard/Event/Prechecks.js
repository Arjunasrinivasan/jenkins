import React from 'react'
import EventContent from './Common/EventContent'
import EventHeader from './Common/EventHeader'

export default function Prechecks({ data }) {
	return (
		<div id='Prechecks' className='tab-pane show'>
			<div className='accordion'>
				{data['Exam Rules Agreement'] ? (
					<div key={data['Exam Rules Agreement'].title}>
						<EventHeader
							icon='far fa-lg fa-tasks'
							count={data['Exam Rules Agreement'].length}
							text='Exam Rules Agreement'
							target='ExamRulesAgreement'
						/>
						<EventContent target='ExamRulesAgreement' data={data['Exam Rules Agreement']} />
					</div>
				) : null}
				{data['Picture confirmation'] ? (
					<div key={data['Picture confirmation'].title}>
						<EventHeader
							icon='far fa-lg fa-image'
							count={data['Picture confirmation'].length}
							text='Picture confirmation'
							target='PictureConfirmation'
						/>
						<EventContent target='PictureConfirmation' data={data['Picture confirmation']} />
					</div>
				) : null}
				{data['Volume check skipped'] ? (
					<div key={data['Volume check skipped'].title}>
						<EventHeader
							icon='far fa-lg fa-microphone'
							count={data['Volume check skipped'].length}
							text='Volume check skipped'
							target='VolumeCheckSkipped'
						/>
						<EventContent target='VolumeCheckSkipped' noContent data={data['Volume check skipped']} />
					</div>
				) : null}
				{data['Light check skipped'] ? (
					<div key={data['Light check skipped'].title}>
						<EventHeader
							icon='far fa-lg fa-lightbulb'
							count={data['Light check skipped'].length}
							text='Light check skipped'
							target='LightCheckSkipped'
						/>
						<EventContent target='LightCheckSkipped' noContent data={data['Light check skipped']} />
					</div>
				) : null}
				{data['System check'] ? (
					<div key={data['System check'].title}>
						<EventHeader
							icon='far fa-lg fa-cogs'
							count={data['System check'].length}
							text='System check'
							target='SystemCheck'
						/>
						<EventContent target='SystemCheck' data={data['System check']} />
					</div>
				) : null}
				{data['Id confirmation'] ? (
					<div key={data['Id confirmation'].title}>
						<EventHeader
							icon='far fa-lg fa-image'
							count={data['Id confirmation'].length}
							text='Id confirmation'
							target='IdConfirmation'
						/>
						<EventContent target='IdConfirmation' data={data['Id confirmation']} />
					</div>
				) : null}
			</div>
		</div>
	)
}
