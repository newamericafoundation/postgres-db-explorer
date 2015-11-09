"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Hi, Mom!');

(function () {

	var tables = ["doc_cms_article", "doc_cms_book", "doc_cms_event", "doc_cms_fileattachment", "doc_cms_imageattachment", "doc_cms_inthenews", "doc_cms_page", "doc_cms_page_pelican_paths", "doc_cms_pagemetafield", "doc_cms_podcast", "doc_cms_policypaper", "doc_cms_post", "doc_cms_post_authors", "doc_cms_post_pelican_paths", "doc_cms_post_programs", "doc_cms_post_tags", "doc_cms_pressrelease", "doc_cms_program", "doc_cms_program_editors", "doc_cms_program_featured_posts", "doc_cms_program_writers", "doc_cms_role", "doc_cms_tag", "doc_cms_user", "doc_cms_user_featured_posts", "doc_cms_user_pelican_paths", "doc_cms_user_roles", "doc_cms_user_tags"];

	var Layout = (function (_React$Component) {
		_inherits(Layout, _React$Component);

		/*
   * 
   *
   */

		function Layout(props) {
			_classCallCheck(this, Layout);

			_get(Object.getPrototypeOf(Layout.prototype), "constructor", this).call(this, props);
			this.state = {
				activeTable: tables[0],
				tableDataOffset: 0
			};
		}

		/*
   *
   *
   */

		_createClass(Layout, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"nav",
						{ className: "top-bar" },
						React.createElement(
							"ul",
							{ className: "title-area" },
							React.createElement(
								"li",
								{ className: "name" },
								React.createElement(
									"h1",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Postgres database explorer"
									)
								)
							),
							React.createElement(
								"li",
								{ className: "toggle-topbar menu-icon" },
								React.createElement(
									"a",
									{ href: "#" },
									React.createElement(
										"span",
										null,
										"Menu"
									)
								)
							)
						)
					),
					React.createElement(
						"ul",
						{ className: "button-group" },
						this.renderTables()
					),
					React.createElement(
						"ul",
						{ className: "button-group" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "button tiny", href: "#", onClick: this.increaseOffset.bind(this) },
								"Next"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "button tiny", href: "#", onClick: this.decreaseOffset.bind(this) },
								"Previous"
							)
						)
					),
					this.renderCurrentTable()
				);
			}

			/*
    *
    *
    */
		}, {
			key: "renderTables",
			value: function renderTables() {
				var _this = this;

				var tableContent = tables.map(function (table, i) {
					return React.createElement(
						"dd",
						{ key: i, className: _this.state.activeTable === table ? 'active' : '' },
						React.createElement(
							"a",
							{
								href: "#",
								onClick: _this.switchActiveTable.bind(_this, table)
							},
							table
						)
					);
				});

				return React.createElement(
					"dl",
					{ className: "sub-nav" },
					React.createElement(
						"dt",
						null,
						"Table"
					),
					tableContent
				);
			}

			/*
    *
    *
    */
		}, {
			key: "renderCurrentTable",
			value: function renderCurrentTable() {
				var data = this.state.data;

				if (data == null) {
					return;
				}

				var tableContent = data.map(function (datum) {
					var rowContent = Object.keys(datum).map(function (key) {
						var value = datum[key];
						return React.createElement(
							"td",
							null,
							value
						);
					});
					return React.createElement(
						"tr",
						null,
						rowContent
					);
				});

				var tableHeadContent = Object.keys(data[0]).map(function (key) {
					return React.createElement(
						"th",
						null,
						key
					);
				});

				return React.createElement(
					"div",
					{ className: "pe__table" },
					React.createElement(
						"table",
						null,
						React.createElement(
							"thead",
							null,
							React.createElement(
								"tr",
								null,
								tableHeadContent
							)
						),
						React.createElement(
							"tbody",
							null,
							tableContent
						)
					)
				);
			}

			/*
    *
    *
    */
		}, {
			key: "increaseOffset",
			value: function increaseOffset(e) {
				e.preventDefault();
				var newTableDataOffset = this.state.tableDataOffset + 10;
				this.setState({ tableDataOffset: newTableDataOffset });
			}

			/*
    *
    *
    */
		}, {
			key: "decreaseOffset",
			value: function decreaseOffset(e) {
				e.preventDefault();
				var newTableDataOffset = this.state.tableDataOffset - 10;
				if (newTableDataOffset < 0) {
					newTableDataOffset = 0;
				}
				this.setState({ tableDataOffset: newTableDataOffset });
			}

			/*
    *
    *
    */
		}, {
			key: "switchActiveTable",
			value: function switchActiveTable(table) {
				this.setState({ activeTable: table });
			}

			/*
    *
    *
    */
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.fetchData();
			}

			/*
    *
    *
    */
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate(prevProps, prevState) {
				if (this.state.activeTable !== prevState.activeTable || this.state.tableDataOffset !== prevState.tableDataOffset) {
					this.fetchData();
				}
			}

			/*
    *
    *
    */
		}, {
			key: "fetchData",
			value: function fetchData() {
				var _this2 = this;

				$.ajax({
					url: "/api/v1/" + this.state.activeTable + "?limit=10&offset=" + this.state.tableDataOffset,
					method: 'get',
					success: function success(data) {
						_this2.setState({ data: data });
					}
				});
			}
		}]);

		return Layout;
	})(React.Component);

	React.render(React.createElement(Layout, null), document.getElementById('site'));
})();