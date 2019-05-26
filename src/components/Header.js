import React from 'react';

export const Header = function() {
	return (
		// src={require("url")} is the sintax for local imgs
		<a href="#flex-container">
			<div className="cover-container">
				<img id ="cover-image" src={require("../img/logo.png")} alt="logo"/>
			</div>
		</a>
	)
}

export default Header;