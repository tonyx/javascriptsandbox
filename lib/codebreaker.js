mark = function(guess,secret) {
	return _.reduce(_.range(countPositionals(guess,secret)),function(acc,x){return acc+"p";},"")+
	 _.reduce(_.range(countNonPositionals(guess,secret)),function(acc,x){return acc+"m";},"");
}
countNonPositionals = function(guess,secret) {
	return countAnyMatch(guess,secret)- countPositionals(guess,secret);
}
countAnyMatch = function(guess,secret) {
	return _.reduce(guess,function(acc,x){ if (secret.search(x)>-1) { secret = secret.substring(0,secret.indexOf(x))+secret.substring(secret.indexOf(x)+1); return acc+1;} else return acc; },0);
}
countPositionals = function(guess,secret) {
	var index=0;
	return _.reduce(guess,function(acc,x){ if (secret[index++]==x) {return acc+1;} else return acc; },0);
}
