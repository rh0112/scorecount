var point = [0,15,30,40];
var point_a = 0;
var point_b = 0;
var game_a = 0;
var game_b = 0;
var serve = true;

var down_a = 0;
var down_b = 0;

function change_serve(){
	if(serve){
		var change_serve = document.getElementById("serve_a");
		change_serve.innerHTML = "●";
		var change_serve = document.getElementById("serve_b");
		change_serve.innerHTML = "<br>";
	}else{
		var change_serve = document.getElementById("serve_a");
		change_serve.innerHTML = "<br>";
		var change_serve = document.getElementById("serve_b");
		change_serve.innerHTML = "●";
	}
	serve = !serve;
}

function point_up(player){
	if(player == 'a'){
		if(point_a == 3){
			game_a ++;
			game_up('a');
		}else{
			point_a ++;
			var change_point = document.getElementById("point_" + player);
			change_point.innerHTML = point[point_a];
		}
	}else if(player == 'b'){
		if(point_b == 3){
			game_b ++;
			game_up('b');
		}else{
			point_b ++;
			var change_point = document.getElementById("point_" + player);
			change_point.innerHTML = point[point_b];
		}
	}
	
}

function point_down(player){
	if(player == 'a'){
		if(point_a == 0){
			game_a --;
			game_down('a');
		}else{
			point_a --;
			var change_point = document.getElementById("point_" + player);
			change_point.innerHTML = point[point_a];
		}
	}else if(player == 'b'){
		if(point_b == 0){
			game_b --;
			game_down('b');
		}else{
			point_b --;
			var change_point = document.getElementById("point_" + player);
			change_point.innerHTML = point[point_b];
		}
	}
}

function game_up(player){
	change_serve();

	down_a = point_a;
	point_a = 0;
	var change_point = document.getElementById("point_a");
	change_point.innerHTML = point[point_a];
	down_b = point_b;
	point_b = 0;
	var change_point = document.getElementById("point_b");
	change_point.innerHTML = point[point_b];

	var change_point = document.getElementById("game_" + player);
	if(player == 'a'){
		change_point.innerHTML = game_a;
	}else if(player == 'b'){
		change_point.innerHTML = game_b;
	}
}

function game_down(player){
	change_serve();

	point_a = down_a;
	var change_point = document.getElementById("point_a");
	change_point.innerHTML = point[point_a];
	point_b = down_b;
	var change_point = document.getElementById("point_b");
	change_point.innerHTML = point[point_b];

	var change_point = document.getElementById("game_" + player);
	if(player == 'a'){
		change_point.innerHTML = game_a;
	}else if(player == 'b'){
		change_point.innerHTML = game_b;
	}
}

window.onload = function(){
	change_serve();
}
