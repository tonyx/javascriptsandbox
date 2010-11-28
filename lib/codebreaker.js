mark = function(guess,secret) {
	return positionalMatches(guess,secret)+nonPositionalMatches(guess,secret);
}

positionalMatch = function(guess,secret) {
	return positionalMatches(guess,secret);
}

positionalMatches = function(guess,secret) {
	var count = countPositionals(guess,secret);
	return _.reduce(_.range(count),function(acc,x){return acc+"p"},"");
}


nonPositionalMatches = function(guess,secret) {
	var count = countNonPositionals(guess,secret);
	return _.reduce(_.range(count),function(acc,x){return acc+"m"},"");
}

countPositionals = function(guess,secret) {
	index=0;
	return _.reduce(guess,function(acc,x){if (secret[index++]==x)  return acc+1; else return acc},0);
}


countNonPositionals = function(guess,secret) {
	return countAnyMatches(guess,secret) - countPositionals(guess,secret);
}

countAnyMatches = function(guess,secret) {
	return _.reduce(guess,function(acc,x){if (secret.search(x)>-1) {secret = removeElement(secret,x); return acc+1;} else return acc},0);
}

removeElement = function(astring,anelement) {
	return astring.substring(0,astring.indexOf(anelement))+ astring.substring(astring.indexOf(anelement)+1);
}

// Your library here
