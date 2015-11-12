import React from 'react'
import { Table, TableRow, TableRowColumn, TableHeader, TableBody, TableHeaderColumn } from 'material-ui'

var DataTable = (props) => {

	var { data } = props

	if (data == null || data[0] == null) { return <Table/> }

	var tableContent = data.map((datum) => {
		var rowContent = Object.keys(datum).map((key, i) => {
			var value = datum[key]
			return (<TableRowColumn key={i}>{ value }</TableRowColumn>)
		})
		return (
			<TableRow>{ rowContent }</TableRow>
		)
	})

	var tableHeadContent = Object.keys(data[0]).map((key, i) => {
		return (
			<TableHeaderColumn key={i}>{ key }</TableHeaderColumn>
		)
	})

	return (
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
	)

}

export default DataTable