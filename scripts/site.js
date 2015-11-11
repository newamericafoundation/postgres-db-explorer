import './../styles/site.scss'

// Signature :)
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import { AppBar, FlatButton } from 'material-ui'

import DataTable from './data_table.js'

import tableInfo from './../db_info/tables.js'

var tables = tableInfo.map(t => t.name);

class Layout extends React.Component {

	/*
	 * 
	 *
	 */
	constructor(props) {
		super(props)
		this.state = {
			activeTable: tables[0],
			tableDataOffset: 0
		}
	}


		/*
		 *
		 *
		 */
		render() {
			return (
				<div>
					<AppBar title='Postgres DB Explorer' />
					<ul>
						{ this.renderTables() }
					</ul>
					<ul>
						<li><a className='button tiny' href="#" onClick={ this.increaseOffset.bind(this) }>Next</a></li>
						<li><a className='button tiny' href="#" onClick={ this.decreaseOffset.bind(this) }>Previous</a></li>
					</ul>
					{ this.renderCurrentTable() }
				</div>
			)
		}


		/*
		 *
		 *
		 */
		renderTables() {
			var tableContent = tables.map((table, i) => {
				return (
					<FlatButton 
						key={i} 
						primary={ (this.state.activeTable === table) }
						onClick={this.switchActiveTable.bind(this, table)}
						label={table}
					/>
				)
			})

			return (
				<dl className='sub-nav'>
					<dt>Table</dt>
					{ tableContent }
				</dl>
			)
		}


		/*
		 *
		 *
		 */
		renderCurrentTable() {
			var { data } = this.state
			if (data == null) { return }
			return (<DataTable data={this.state.data} /> )
		}


		/*
		 *
		 *
		 */
		increaseOffset(e) {
			e.preventDefault()
			var newTableDataOffset = this.state.tableDataOffset + 10
			this.setState({ tableDataOffset: newTableDataOffset })
		}


		/*
		 *
		 *
		 */
		decreaseOffset(e) {
			e.preventDefault()
			var newTableDataOffset = this.state.tableDataOffset - 10
			if (newTableDataOffset < 0) { newTableDataOffset = 0 }
			this.setState({ tableDataOffset: newTableDataOffset })
		}


		/*
		 *
		 *
		 */
		switchActiveTable(table) {
			this.setState({ activeTable: table })
		}


		/*
		 *
		 *
		 */
		componentWillMount() {
			this.fetchData()
		}


		/*
		 *
		 *
		 */
		componentDidUpdate(prevProps, prevState) {
			if ((this.state.activeTable !== prevState.activeTable) || (this.state.tableDataOffset !== prevState.tableDataOffset)) {
				this.fetchData()
			}
		}


		/*
		 *
		 *
		 */
		fetchData() {
			$.ajax({
				url: `/api/v1/${this.state.activeTable}?limit=10&offset=${this.state.tableDataOffset}`,
				method: 'get',
				success: (data) => {
					this.setState({ data: data })
				}
			})
		}

	}

ReactDOM.render(<Layout />, document.getElementById('site'))