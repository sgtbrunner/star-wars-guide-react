// ** These functions support the main App and its Components dealing with
// API, its errors and inconsistencies.  

// VARIABLE DECLARATION
	let pages = [];
	const urls = [
		'https://swapi.dev/api/people/',
		'https://swapi.dev/api/people/?page=2',
		'https://swapi.dev/api/people/?page=3',
		'https://swapi.dev/api/people/?page=4',
		'https://swapi.dev/api/people/?page=5',
		'https://swapi.dev/api/people/?page=6',
		'https://swapi.dev/api/people/?page=7',
		'https://swapi.dev/api/people/?page=8',
		'https://swapi.dev/api/people/?page=9',
	]
	
// FUN FUN FUNCTIONS
// Gets all the characters from different pages and concat them in a single array
const getCharacters = async function() {
	try {
		await getData();			
		return concatArray(pages);
	} catch (err) {
	   	console.log('ooooooops', err);		
	}
}

// Fetches all the character data information from API server and store it in pages as it's defined on SWAPI
const getData = async function() {
	try {
		pages = await Promise.all(urls.map(async function(url) {
	        const response = await fetch(url);
	        return await response.json();
	    }));
	} catch (err) {
	   		console.log('ooooooops', err);	
	}
}

// Function for concating information in an array
const concatArray = (array) => {
	let people = [];
	let i;
	for( i=0 ; i<array.length ; i++ ) {
		people = people.concat(array[i].results);
	}
	return people;
}

// ** This auxiliar function adds obj2 props into obj1 and returns obj1
const augment = (obj1, obj2) => {
	let prop;
	for(prop in obj2) {
		if (obj2.hasOwnProperty(prop) && !obj1[prop]) {
			obj1[prop] = obj2[prop];
		}
	}
	return obj1;
}

// ** This function adds ID property to every object without ID inside a given array of objects
const addId = (array) => {
	array.map((item, index) => {
			const newprop = {id: index}
			return item = augment(item, newprop);
	})
}

export const createList = async function() {
	let list = await getCharacters();
	addId(list);
	return list;
}

// ** SWAPI has an issue handling https://swapi.co/api/people/17/ returnig error 404,
// 	which can be bypassed with the following function
export const getImage = (index) => {
		if (index < 16) {
				return `https://starwars-visualguide.com/assets/img/characters/${(index+1)}.jpg`;
			} else {
				return `https://starwars-visualguide.com/assets/img/characters/${(index+2)}.jpg`;
		}
	}

		// Used for fetching "species" and "homeworld" information from characters
export const getStats = async function(url) {
		// SWAPI hasn't defined "species" nor "homeworld" for some characters, therefore it has to be handled accordingly
		if (url.toString()!=='' && url.toString()!==[] && url.toString()!=={}) {
			try {		
		        const response = await fetch(url);
		        return await response.json();
			} catch (err) {
		   		console.log('ooooooops', err);		
			}	
		} else {
			return await {"name": "unknown"};
		}
	}

	// Used for fetching "films" information from characters
export const getFilms = async function(urls) {
		let movies = '';
		let i=0;
		try {
			for (i=0; i<urls.length; i++) {
				let response = await fetch(urls[i]);
				let movie = await response.json();
				if (i < urls.length-1) {
					movies += movie.title + ', ';
				} else {
					movies += movie.title;
				}
			} 
		} catch (err) {
		   		console.log('ooooooops', err);	
			}
		  	return movies;
};