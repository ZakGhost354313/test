//
////imports
//import {secrets} from ../JS
//

//functions
function base64(input, ed) {
	if (ed == 'e') {
		base = window.btoa(unescape(encodeURIComponent(input)));
	}
	if (ed == 'd') {
		base = decodeURIComponent(escape(window.atob(input)));
	}
	/*
	base = 'Error(base64): '+input
	*/
	return base;
	//return null/0;
}

function md5(input) {
	return input;
}

function encrypt(type,input) {
	if (type='base64') {
	output = base64(input,'e');
}
	if (type='md5') {
	output = md5(input);
}
	//output = 'ERROR:'+type+': '+input
	//output = '69'
	return output;
}

//main function
function secret(name,plaintext) {
	c = encrypt('base64',plaintext);
	s = name+':'+c
	return s;
}

//main
console.log(secret('test1','this_is_a_test'));
