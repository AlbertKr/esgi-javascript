
/* UCFIRST */

function ucfirst(motUcFirst){
	if( typeof motUcFirst === 'string' ){
		return motUcFirst.charAt(0).toUpperCase() + motUcFirst.slice(1);
	}else{
		return '';
	}
}

/* CAPITALIZE */

function capitalize(motCapitalize){
	if( typeof motCapitalize === 'string' ){
		var tabMot = motCapitalize.split(" ");
		
		var motCap = "";
		var mot = "";
		for(var i = 0; i < tabMot.length; i++){
			motCap = ucfirst(tabMot[i]);
			if( i == 0 ){
				mot = motCap;
			}else{
				mot = mot + " " + motCap;
			}
		}
		
		return mot;
	}else{
		return '';
	}
}

// var helloWorld = "hello world";

// var testCapitalize = capitalize(helloWorld);

// console.log(testCapitalize);

/* CAMELCASE */

function camelCase(motCamelCase){
	if( typeof motCamelCase === 'string' ){
		var motCapit = capitalize(motCamelCase);
		var tabMot = motCapit.split(" ");
		return tabMot.join("");
	}else{
		return '';
	}
}

// var helloWorld = "hello world";

// var testCamelCase = camelCase(helloWorld);

// console.log(testCamelCase);


/* SNAKECASE */

function snake_case(motSnakeCase){
	if( typeof motSnakeCase === 'string' ){
		var motCapit = motSnakeCase.toLowerCase();
		var tabMot = motCapit.split(" ");
		return tabMot.join("_");
	}else{
		return '';
	}
}

/* LEET */

function leet(motLeet){
	if( typeof motLeet === 'string' ){
		var mot = "";
		for (var i = 0; i < motLeet.length; i++) {
			var motL = motLeet.charAt(i);
			switch(motL){
				
				case "a":
					motL = "4";
					break;
					
				case "A":
					motL = "4";
					break;
					
				case "e":
					motL = "3";
					break;
					
				case "E":
					motL = "3";
					break;
					
				case "i":
					motL = "1";
					break;
					
				case "I":
					motL = "1";
					break;
					
				case "o":
					motL = "0";
					break;
					
				case "O":
					motL = "0";
					break;
					
				case "u":
					motL = "(_)";
					break;
					
				case "U":
					motL = "(_)";
					break;
					
				case "y":
					motL = "7";
					break;
					
				case "Y":
					motL = "7";
					break;
			}
			mot = mot + motL;
		}
		return mot;
	}else{
		return '';
	}
}

/* PROPACCESS */

function prop_access(input, path){
	
	var pathArray = path.split(".");
	for(var i = 0; i < pathArray.length; i++){
		if( input[pathArray[i]] === undefined ){
			console.log('path not exist');
			return null;
		}
		input = input[pathArray[i]];
	}

	return input;
}

