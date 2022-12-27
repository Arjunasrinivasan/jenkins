import React from 'react'

export default function InstitutionNotes({ data }) {
	return (
		<>
			<p>{data.payload.included[1].attributes.institution_notes}</p>
			<p>
				<b>Contacts:</b> Name: {data.payload.included[2].attributes.exam_contact_name}
				<br />
				<b>Email:</b> {data.payload.included[2].attributes.exam_contact_email}
				<br />
				<b>Phone:</b> {data.payload.included[2].attributes.exam_contact_phone}
			</p>
		</>
	)
}
