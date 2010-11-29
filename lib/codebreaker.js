removeElement = function(alist,anelement) {
	return alist.substring(0,alist.indexOf(anelement))+alist.substring(alist.indexOf(anelement)+1);
}

mark = function(guess,secret) {
	return positionalMatches(guess,secret)+nonPositionalMatches(guess,secret);
}
nonPositionalMatches = function(guess,secret) {
	count = countNonPositionals(guess,secret);
	return _.reduce(_.range(count),function(acc,x){return acc+"m";},"");
}
positionalMatches = function(guess,secret) {
	count = countPositionals(guess,secret);
	return _.reduce(_.range(count),function(acc,x){return acc+"p";},"");
}
countNonPositionals = function(guess,secret) {
	return countAnyMatches(guess,secret)-countPositionals(guess,secret);
}
countAnyMatches = function(guess,secret) {
	return _.reduce(guess,function(acc,x){if (secret.search(x)>-1) { secret = removeElement(secret,x); return acc+1;} else return acc;} ,0);
}

countPositionals = function(guess,secret) {
	var index = 0;
	return _.reduce(guess,function(acc,x){if (secret[index++]==(x)) {return acc+1;} else return acc;} ,0);
}



