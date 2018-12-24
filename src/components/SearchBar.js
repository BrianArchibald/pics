import React from 'react';

class SearchBar extends React.Component {
	onInputChange(event) {
		console.log(event.target.value);
	}

	render () {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" onChange={this.onInputChange}/> 
					</div>
				</form>
			</div>
		);
	}
}
// I dont want to call the onInputChange with () on  the input as it would call on render, common error
//  There is also onClick and onSubmit


export default SearchBar;