$(function(){
	dragula([document.getElementById("left-pane"), document.getElementById("right-pane")], {
	  moves: function (el, container, handle) {
    	return handle.className === 'handle';
	  }
	});
});
