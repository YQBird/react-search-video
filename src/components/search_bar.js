import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: 'default value'};
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);	
	}

  // <input> is a controller component, unidirectional data, set default
  // user didn't change input value, but trigger event to change state
  // the state then change the input value
	render() {
    return (
    	<div className="search-bar">
	    	<input 
          value={this.state.term}
	    	  onChange={event => this.onInputChange(event.target.value)} />
    	</div>
    );
	}
};

export default SearchBar;