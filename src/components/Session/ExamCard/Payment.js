import React from 'react'

export default function Payment({ data }) {
	return (
		<div id='payment' className='tab-pane active'>
			<div className='table-responsive'>
				<table className='table table-bordered'>
					<thead>
						<tr>
							<th>Description</th>
							<th>Date</th>
							<th>Type</th>
							<th>Amt.</th>
						</tr>
					</thead>
					<tbody>
						{data.payload.included[2].attributes.payments.map(el => (
							<tr key={el.description}>
								<td>{el.description}</td>
								<td>{el.date}</td>
								<td>{el.type}</td>
								<td>{el.amount}</td>
							</tr>
						))}
						{/* <tr>
							<td colSpan='4'>
								Total
								<span className='float-right'>${data.total}</span>
							</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		</div>
	)
}
