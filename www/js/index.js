  var whois = ["허태량" , "한태희" , "김승범" , "송재우" , "김성호" , "유형덕" , "박용범" , "노성화" , "황지선" , "이혜주" , 
               "강성진" , "좌행복" , "한창수" , "이승진" , "오송이" , "이강진" , "차규원" , "정두리" , "이현주" , "전영범" ,
               "서동일" , "최일환" , "김세미" , "유승범" , "구상현" , "이유라" , "박헌웅" , "김종현" , "석지오" , "노의현"];

  var color = ["red" , "orange" , "yellow" , "green" , "blue" , "violet" , "white" , "brown" , "skyblue" , "gray" , "lightgreen" , "silver" , "pink" , "gold" , "wine"];

  $(document).ready(function(){
    
    var i = 0;
    var input2;
    
    Css();
    
    StopSize();
      
    $("#get").click(function(){
      Go();
    });
    
    function Go(){
      var Count = document.getElementById("no").value;
      document.getElementById("no").value = "";
      Count *= 1;
      
      if(Count > 2){
      
      var input = setInterval(function() {
        document.getElementById("Ha").innerHTML = "";
        $("#who").css("font-size" , "300");
        document.getElementById("who").innerHTML = Count--;
      }, 1000);
      
      setTimeout(function(){
        clearInterval(input);
        
        Start();
        
        
        
        }, (Count + 1) * 1000);
      }else if(Count < 3){
        alert("3초 이상의 시간을 입력해주세요");
        SizeBounce();
      }else{
        alert("시간(초)만 입력가능합니다.");
        SizeBounce();
      }
    }
    
    function Start(){
      
      var j = 0;
      var k = 0;
      var m = 0;
      
      input2 = setInterval(function() {
        
      if (m == 0){
        document.getElementById("who").innerHTML = whois[parseInt(Math.random() * 30)];
      }
    
      
      if (k == 0) {
        $("#who").css("font-size", j += 3);
        if (j == 300) {
          k = 1;
        }
      }
      
      if (m == 0 && j == 300){
        m = 1;
        if(m == 1){
          document.getElementById("who").innerHTML = whois[parseInt(Math.random() * 30)];
          document.getElementById("Ha").innerHTML = "축하합니다~^^";
          m++;
        }
      }
      
      if (k == 1) {
        $("#who").css("font-size", j -= 3);
          if (j == 0) {
            k = 0;
          }
        }
      }, 30);
    }
    
    function SizeBounce(){
      
      var j = 0;
      var k = 0;
      
      input2 = setInterval(function() {
    
      if (k == 0) {
        $("#who").css("font-size", j += 3);
        if (j == 300) {
          k = 1;
        }
      }
      
      if (k == 1) {
        $("#who").css("font-size", j -= 3);
          if (j == 0) {
            k = 0;
          }
        }
      }, 30);
    }

    function StopSize() {
      $("#get").click(function() {
      if (input2){
        clearInterval(input2);}
        input2 = null;
      });
    };
    
    function Css(){
      setInterval(function() {
      $("#title, #who, #Ha, #no").css("color" , color[i++]);
        if(i == color.length){
          i = 0;
        }
      }, 100);
    }
  });