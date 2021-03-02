import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image,ingredients, url}) => {
	return(
		<div className={style.recipe}>
			<h1>{title}</h1>
			<p>Calories: {calories}</p>
			<h2>Ingredients:</h2>
			<ol>{ingredients.map(ingredient =>(
				<li>{ingredient.text}</li>
			))}
			</ol>
			<img className = {style.recipe} src ={image} alt="" />
			<a href= {url}>Click here to learn how to cook this!</a>
		</div>
	);
};

export default Recipe;