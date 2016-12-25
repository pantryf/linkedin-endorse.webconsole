var es = [];
var act = function() {
	if (es.length) { es.shift().click(); console.log('liendorse: <endorse>'); }
	else es = Array.prototype.slice.call(document.getElementsByClassName('endorse-action'));
	setTimeout(act, 1000);
};
act();
