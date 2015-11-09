console.log('Hi, Mom!');

(function() {

	var tables = [
		"doc_cms_article",
		"doc_cms_book",
		"doc_cms_event",
		"doc_cms_fileattachment",
		"doc_cms_imageattachment",
		"doc_cms_inthenews",
		"doc_cms_page",
		"doc_cms_page_pelican_paths",
		"doc_cms_pagemetafield",
		"doc_cms_podcast",
		"doc_cms_policypaper",
		"doc_cms_post",
		"doc_cms_post_authors",
		"doc_cms_post_pelican_paths",
		"doc_cms_post_programs",
		"doc_cms_post_tags",
		"doc_cms_pressrelease",
		"doc_cms_program",
		"doc_cms_program_editors",
		"doc_cms_program_featured_posts",
		"doc_cms_program_writers",
		"doc_cms_role",
		"doc_cms_tag",
		"doc_cms_user",
		"doc_cms_user_featured_posts",
		"doc_cms_user_pelican_paths",
		"doc_cms_user_roles",
		"doc_cms_user_tags"
	];


	class Layout extends React.Component {

		/*
		 * 
		 *
		 */
		constructor(props) {
			super(props);
			this.state = {
				activeTable: tables[0],
				tableDataOffset: 0
			};
		}


		/*
		 *
		 *
		 */
		render() {
			return (
				<div>
					<nav className='top-bar'>
						<ul className="title-area">
						    <li className="name">
						      <h1><a href="#">Postgres database explorer</a></h1>
						    </li>
						    <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
						  </ul>
					</nav>
					
					<ul className='button-group'>
						{ this.renderTables() }
					</ul>

					<ul className='button-group'>
						<li><a className='button tiny' href="#" onClick={ this.increaseOffset.bind(this) }>Next</a></li>
						<li><a className='button tiny' href="#" onClick={ this.decreaseOffset.bind(this) }>Previous</a></li>
					</ul>
					{ this.renderCurrentTable() }
					
				</div>
			);
		}


		/*
		 *
		 *
		 */
		renderTables() {
			var tableContent = tables.map((table, i) => {
				return (
					<dd key={i} className={ (this.state.activeTable === table) ? 'active' : '' }>
						<a 
							href="#"
							onClick={this.switchActiveTable.bind(this, table)}
						>
							{ table }
						</a>
					</dd>
				);
			});

			return (
				<dl className='sub-nav'>
					<dt>Table</dt>
					{ tableContent }
				</dl>
			);
		}


		/*
		 *
		 *
		 */
		renderCurrentTable() {
			var { data } = this.state;
			if (data == null) { return; }

			var tableContent = data.map((datum) => {
				var rowContent = Object.keys(datum).map((key) => {
					var value = datum[key];
					return (<td>{ value }</td>)
				});
				return (
					<tr>{ rowContent }</tr>
				);
			});

			var tableHeadContent = Object.keys(data[0]).map((key) => {
				return (
					<th>{ key }</th>
				);
			});

			return (
				<div className='pe__table'>
					<table>
						<thead>
							<tr>
								{ tableHeadContent }
							</tr>
						</thead>

						<tbody>
							{ tableContent }
						</tbody>
					</table>
				</div>
			);
		}


		/*
		 *
		 *
		 */
		increaseOffset(e) {
			e.preventDefault();
			var newTableDataOffset = this.state.tableDataOffset + 10;
			this.setState({ tableDataOffset: newTableDataOffset });
		}


		/*
		 *
		 *
		 */
		decreaseOffset(e) {
			e.preventDefault();
			var newTableDataOffset = this.state.tableDataOffset - 10;
			if (newTableDataOffset < 0) { newTableDataOffset = 0; }
			this.setState({ tableDataOffset: newTableDataOffset });
		}


		/*
		 *
		 *
		 */
		switchActiveTable(table) {
			this.setState({ activeTable: table });
		}


		/*
		 *
		 *
		 */
		componentWillMount() {
			this.fetchData();
		}


		/*
		 *
		 *
		 */
		componentDidUpdate(prevProps, prevState) {
			if ((this.state.activeTable !== prevState.activeTable) || (this.state.tableDataOffset !== prevState.tableDataOffset)) {
				this.fetchData();
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
					this.setState({ data: data });
				}
			});
		}

	}

	React.render(<Layout />, document.getElementById('site'));

}());