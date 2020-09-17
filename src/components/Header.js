import React from 'react';

export const Header = function() {
	return (
		<a href="#flex-container">
			<div className="cover-container">
				<img id ="cover-image" src={require("../assets/img/logo.png")} alt="logo"/>
			</div>
		</a>
	)
}

export default Header;