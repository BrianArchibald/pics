import React from 'react';

class SearchBar extends React.Component {
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }

	state = {term: ''};

	onFormSubmit = (event) => { //arrow binds this to the function(SearchBar)
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render () {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" value ={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/> 
					</div>
				</form>
			</div>
		);
	}
}
// I dont want to call the onInputChange with () on  the input as it would call on render, common error
//  There is also onClick and onSubmit

// Alternative way to call onInputChange, use when only doing a single event
// <input type="text" onChange={(event) => console.log(event.target.value)}/> 
// Other way 
// <input type="text" onChange={this.onInputChange}/>


export default SearchBar;