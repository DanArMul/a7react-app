import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';





const Favorites = ({bookmarked}) => {
	
	return(
		<div className = 'bookmarked-part'>
			<form onClick={() => bookmarked = true} className="bookmarked-form">
				<button className = 'bookmarked-button' type='button'>{String(bookmarked)}</button>
			</form>
		</div>
	);
};

export default Favorites;