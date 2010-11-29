removeElement = function(astring,achar) {
	return astring.substring(0,astring.indexOf(achar)+astring.substring(astring.indexOf(achar)+1));
}
mark = function(guess,secret) {
	return positionalMatches(guess,secret);
}
positionalMatches = function(guess,secret) {
	count=countNonPositionals(guess,secret);	
	return _.reduce(_.range(count),function(acc,x){return acc+"m";},"");
}
countNonPositionals = function(guess,secret) {
	return _.reduce(guess,function(acc,x){if (secret.search(x)>-1) {secret = removeElement(secret,x); return acc+1;} else return acc;},0);
}
