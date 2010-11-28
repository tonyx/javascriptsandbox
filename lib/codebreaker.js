
removeElement = function(aString,anElement) {
	return aString.substring(0,aString.indexOf(anElement))+aString.substring(aString.indexOf(anElement)+1);
}

mark = function(guess,secret) {
	return positionalMatch(guess,secret)+nonPositionalMatch(guess,secret);	
}

countAnyMatch = function(guess,secret) {
	return _.reduce(guess,function(acc,n){if (secret.search(n)>-1) {secret = removeElement(secret,n); return 1+acc;} else return acc;},0);
}

countNonPositionals = function(guess,secret) {
	return countAnyMatch(guess,secret) - countPositionals(guess,secret);
	//return _.reduce(guess,function(acc,n){if (localsecret.search(n)>-1) {localsecret = removeElement(localsecret,n); return 1+acc;} else return acc;},0);
	//toReturn= "";
}

countPositionals = function(guess,secret) {
	index=0;
	return _.reduce(guess,function(acc,n){if (secret[index++]==n) return 1+acc; else return acc;},0);
	//toReturn= "";
}

positionalMatch = function(guess,secret) {
	count = countPositionals(guess,secret);
	return _.reduce(_.range(count),function(acc,n){return acc+"p";},"");
	//return "p";
}

nonPositionalMatch = function(guess,secret) {
	count = countNonPositionals(guess,secret);
	return _.reduce(_.range(count),function(acc,n){return acc+"m";},"");
}

//nonPositionalMatch = function(guess,secret) {
//	return _.reduce(guess,function(acc,n){if (secret.search(n)>-1) {secret = removeElement(secret,n); return "m"+acc;} else return acc;},"");
	//toReturn= "";
	//for (i=0;i<guess.length;i++) {
		//if (secret.search(guess[i])>-1) 
			//toReturn+="m";
	//}
	//return toReturn;
//}



// Your library here
