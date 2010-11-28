removeElement = function(mystring,element) {
	return mystring.substring(0,mystring.indexOf(element))+mystring.substring(mystring.indexOf(element)+1);
}


positionalMatch = function(guess,secret) {
	var count = countPositionals(guess,secret);
	return _.reduce(_.range(count),function(acc,n){return acc+"p";},"");
}

countPositionals = function(guess,secret) {
	var index = 0;
	return _.reduce(guess,function (acc,n){if (secret[index++]==(n)) {return acc+1;} else return acc;},0);
}


mark = function(guess, secret) {
	return nonPositionalMatch(guess,secret)+positionalMatch(guess,secret);
}


nonPositionalMatch = function(guess, secret) {
	var count = countNonPositionals(guess,secret);
	return _.reduce(_.range(count),function(acc,n){return acc+"m";},"");
}


countNonPositionals = function(guess, secret) {
	return countAnyMatches(guess,secret)- countPositionals(guess,secret);
}

countAnyMatches = function(guess, secret) {
	return _.reduce(guess,function (acc,n){if (secret.search(n)>-1) {secret = removeElement(secret,n); return acc+1;} else return acc;},0);
}

