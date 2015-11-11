import React from 'react'
import { Table, TableRow, TableRowColumn, TableHeader, TableBody, TableHeaderColumn } from 'material-ui'

var DataTable = (props) => {

	var { data } = props

	var tableContent = data.map((datum) => {
		var rowContent = Object.keys(datum).map((key) => {
			var value = datum[key]
			return (<TableRowColumn>{ value }</TableRowColumn>)
		})
		return (
			<TableRow>{ rowContent }</TableRow>
		)
	})

	var tableHeadContent = Object.keys(data[0]).map((key) => {
		return (
			<TableHeaderColumn>{ key }</TableHeaderColumn>
		)
	})

	return (
		<div className='pe__table'>
			<Table>
				<TableHeader>
					<TableRow>
						{ tableHeadContent }
					</TableRow>
				</TableHeader>
				<TableBody>
					{ tableContent }
				</TableBody>
			</Table>
		</div>
	)

}

export default DataTable