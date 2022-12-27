import React from 'react'

export default function Timestamp({ data }) {
	return (
		<div id='timestamp' className='tab-pane active'>
			<div className='table-responsive'>
				<table className='table table-unbordered'>
					<tbody>
						<tr>
							<td>
								<b>Exam Started</b>
							</td>
							<td>{data.payload.data.attributes.exam_start}</td>
						</tr>
						<tr>
							<td>
								<b>Exam Ended</b>
							</td>
							<td>{data.payload.data.attributes.actual_end}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
