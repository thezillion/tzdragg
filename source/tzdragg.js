/*

# Coded by /thezillion/

*/

!function(win, doc, nav) {
	var $id = function(el){
	
			return document.getElementById(el); // To make the code simpler by shortening document.getElementById - [http://bit.ly/QS3wE8]
	
		},
	
		is_element_having_set_coordinates = function(el){
	
			var a = $id(el),
	
				b = a.style.position;
	
			if (!b || b != 'absolute'){
	
				$id(el).style.position = 'absolute';
	
				var posX = $id(el).offsetTop + 'px',
	
					posY = $id(el).offsetLeft + 'px';
	
				$id(el).style.top = posX;
	
				$id(el).style.left = posY;
	
			}
	
		},
	
		tzdragg = function(){ // To make the code cooler. TZDragg. Cool name!
	
			return {
	
				// Here we start of with the main functions
	
				startMoving : function(evt, elid){ // The function that sets up the div coordinates to make it move. Executed on the onmousedown event on the div.
	
					evt = evt || win.event;
	
					is_element_having_set_coordinates(elid);
	
					var posX = evt.clientX, // The x-coordinate of the mouse pointer position on the screen
	
						posY = evt.clientY, // The y-coordinate of the mouse pointer position on the screen
	
						a = $id(elid),// Points to the div element
	
						divTop = a.style.top, // We need the initial position of the div so that we can determine its final position on dragging
	
						divLeft = a.style.left; // We need the initial position of the div so that we can determine its final position on dragging
	
					divTop = divTop.replace('px',''); // Just so that we can perform calculations on the variable.
	
					divLeft = divLeft.replace('px',''); // Just so that we can perform calculations on the variable.
	
					var diffX = posX - divLeft,	// We keep this value so that we can calculate the final position of the element
	
						diffY = posY - divTop;	// We keep this value so that we can calculate the final position of the element
	
					document.onmousemove = function(evt){ // Whenever the mouse moves, this function is execulted
	
						evt = evt || win.event;
	
						var posX = evt.clientX,	// Mouse x-coordinate
	
							posY = evt.clientY,	// Mouse y-coordinate
	
							aX = posX - diffX,	// The final x-coordinate of the element
	
							aY = posY - diffY;	// The final y-coordinate of the element
	
						tzdragg.move(elid,aX,aY); // Function to assign the style rules to the element
	
					}
	
				},
	
				stopMoving : function(){ // This function gets executed when the user leaves the div alone. Changed the value of the onmousemove attribute.
	
					document.onmousemove = function(){}
	
				},
	
				move : function(divid, xpos, ypos){ // Function to assign the style rules to the element
	
					var a = $id(divid);
	
					$id(divid).style.left = xpos + 'px';
	
					$id(divid).style.top = ypos + 'px';
	
				},
	
				drag: function(el){
	
					var ela = el.replace(new RegExp(' ', 'g'), '');
	
					ela = ela.split(',');
	
					for (var i = 0; i<ela.length; i++){
	
						var elb = ela[i];
	
						if ($id(elb)){
	
							$id(elb).className += ' tz-dragging';
	
							$id(elb).onmousedown = function(){
	
								tzdragg.startMoving(event, this.id);
	
							}
	
							$id(elb).onmouseup = function(){
	
								tzdragg.stopMoving(event, this.id);
	
							}
	
						}
	
					}
	
				}
	
			}
	
		}();
}(window, document, navigator);
