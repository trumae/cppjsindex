/**
 * number by https://github.com/trumae/bigprimewithndigits and parameter 13 digits and nbase 100
 */
var prime = 9999999999299;

function cppjsindex(s) {
    var r = 1;

    for (var i=0; i < s.length; i++) {
	r *= s.charCodeAt(i);
 	r ++;
	r = r % prime;
    }
    
    return r;
}


exports.index = cppjsindex;
