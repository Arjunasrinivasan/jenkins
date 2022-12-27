import React from 'react'
import ExamNotes from './ExamNotes'
import ExamProfile from './ExamProfile'
import InstitutionNotes from './InstitutionNotes'
import Payment from './Payment'
import Timestamp from './Timestamp'

export default function ExamCard({ data }) {
	const [dropdownActive, setDropdownActive] = React.useState('Exam Notes')

	const activeTabPane = () => {
		switch (dropdownActive) {
			case 'Exam Notes':
				return <ExamNotes data={data} />

			case 'Exam Profile':
				return <ExamProfile data={data} />

			case 'Institution Notes':
				return <InstitutionNotes data={data} />

			case 'Payment':
				return <Payment data={data} />

			case 'Timestamp':
				return <Timestamp data={data} />

			default:
				return null
		}
	}

	return (
		<div className='card mb-4'>
			<div className='card-header'>
				Exam
				<div className='float-right'>
					<div id='exam-select-dropdown' className='dropdown'>
						<button className='btn btn-secondary btn-sm dropdown-toggle' data-toggle='dropdown' type='button'>
							{dropdownActive}
						</button>
						<div
							id='exam-tabs'
							className='dropdown-menu dropdown-menu-right'
							x-placement='bottom-end'
							style={{
								position: 'absolute',
								transform: 'translate3d(-61px, 31px, 0px)',
								top: '0px',
								left: '0px',
								willChange: 'transform',
							}}
						>
							<a
								className={`dropdown-item ${dropdownActive === 'Exam Notes' ? 'active' : null}`}
								href='#exam-notes'
								onClick={e => {
									e.preventDefault()
									setDropdownActive('Exam Notes')
								}}
							>
								Exam Notes
							</a>
							<a
								className={`dropdown-item ${dropdownActive === 'Exam Profile' ? 'active' : null}`}
								href='#profile'
								onClick={e => {
									e.preventDefault()
									setDropdownActive('Exam Profile')
								}}
							>
								Exam Profile
							</a>
							<a
								className={`dropdown-item ${dropdownActive === 'Institution Notes' ? 'active' : null}`}
								href='#institution-notes'
								onClick={e => {
									e.preventDefault()
									setDropdownActive('Institution Notes')
								}}
							>
								Institution Notes
							</a>
							<a
								className={`dropdown-item ${dropdownActive === 'Payment' ? 'active' : null}`}
								href='#payment'
								onClick={e => {
									e.preventDefault()
									setDropdownActive('Payment')
								}}
							>
								Payment
							</a>
							<a
								className={`dropdown-item ${dropdownActive === 'Timestamp' ? 'active' : null}`}
								href='#timestamp'
								onClick={e => {
									e.preventDefault()
									setDropdownActive('Timestamp')
								}}
							>
								Timestamp
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='panel-collapse'>
				<div className='card-body tab-content'>{activeTabPane()}</div>
			</div>
		</div>
	)
}
