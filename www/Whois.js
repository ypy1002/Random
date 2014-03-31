$(document).ready(function(){
	
	var SelectedNameis = ["허태량" , "한태희" , "김승범" , "송재우" , "김성호" , "유형덕" , "박용범" , "노성화" , "황지선" , "이혜주" , 
	             "강성진" , "좌행복" , "한창수" , "이승진" , "오송이" , "이강진" , "차규원" , "정두리" , "이현주" , "전영범" ,
	             "서동일" , "최일환" , "김세미" , "유승범" , "구상현" , "이유라" , "박헌웅" , "김종현" , "석지오" , "노의현"];
	var color = ["red" , "orange" , "yellow" , "green" , "blue" , "violet" , "white" , "brown" , "skyblue" , "gray" , "lightgreen" , "silver" , "pink" , "gold"];
	var i = 0;
	var j = 0;
	var k = 0;
	var m = 0;
	var input = 0;
	var input2 = 0;
	var input3 = 0;
	var Count = 0;

	Css();
	
	$("#Cancel").click(function(){
		Stop();
		Clear();
		$("#get , #Time").css("display" , "");
		$("#Cancel").css("display" , "none");
		alert("취소되었습니다.");
	});
	
	$("#get").click(function(){
		
		Count = $("#Time").val();
		Count *= 1;
		
		if(Count > 0 && Count < 601){
			$("#get , #Time").css("display" , "none");
			$("#Cancel").css("display" , "");
		}
		
		Stop();
		Go(Count);
	});
	
	function Go(Count){
		if(Count > 0 && Count < 601){
			
			Clear();
			$("#SelectedName").html(Count--);
			input = setInterval(function() {
				$("#SelectedName").html(Count--);
				$("#SelectedName").css("font-size" , "300");
				tempCount = Count;
			}, 1000);
		
			input2 = setTimeout(function(){
				clearInterval(input);
				Start();
			}, (Count + 1) * 1000);
			
		}else{
			alert("1초~10분(600초) 사이의 시간(초)만 입력가능합니다.");
			$("#Time").val("");
			Bounce();
		}
	}
	
	function Clear(){
		$("#Congratulation").html("");
		$("#SelectedName").html("");
		$("#Time").val("");
	}
	
	function Stop(){
		clearTimeout(input);
		clearInterval(input2);
		clearInterval(input3);
	}
	
	function Start(){
		
		j = 0;
		k = 0;
		m = 0;
		
		input2 = setInterval(function() {
			
		if (m == 0){
			Count = 0;
			$("#Time , #Cancel").css("display" , "none");
			$("#SelectedName").html(SelectedNameis[parseInt(Math.random() * 30)]);
		}
		
		if (k == 0) {
			$("#SelectedName").css("font-size", j += 3);
			if (j == 300) {
				k = 1;
			}
		}
		
		if (m == 0 && j == 300){
			$("#SelectedName").html(SelectedNameis[parseInt(Math.random() * 30)]);
			$("#Congratulation").html("축하합니다~^^");
			$("#get , #Time").css("display" , "");
			m++;
			
		}
		
		if (k == 1) {
			$("#SelectedName").css("font-size", j -= 3);
				if (j == 0) {
					k = 0;
				}
			}
		}, 30);
	}
	
	function Bounce(){
		
		input3 = setInterval(function() {
		
		if (k == 0) {
			$("#SelectedName").css("font-size", j += 3);
			if (j == 300) {
				k = 1;
			}
		}
		
		if (k == 1) {
			$("#SelectedName").css("font-size", j -= 3);
				if (j == 0) {
					k = 0;
				}
			}
		}, 30);
	}

	function Css(){
		setInterval(function() {
		$("#title, #SelectedName, #Congratulation, #Time").css("color" , color[i]);
		i++;
			if(i == color.length){
				i = 0;
			}
	    }, 100);
	}
});
