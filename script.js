$(".submit").click(function(){
var favcolor = $(".a1").val();
var num = $(".a2").val();
$(".answers").show();
  
if (favcolor == "black" && num >=1) {
reply = "emo";
$(".style").append("<h2>" +"Your favorite color is " + favcolor + " and you chose room " + num + ". You are.. " + reply + "."+"</h2>");
$(".aesthetic").attr("src", "emo.jpeg");
}

else if (favcolor == "purple" && num <=2){
reply = "indie";
$(".style").append("<h2>" +"Your favorite color is " + favcolor + " and you chose room " + num + ". You are.. " + reply + "."+"</h2>");
$(".aesthetic").attr("src", "indie.jpeg");
}
  
else if (favcolor == "pink" && num > 3){
minionName = "preppy";
$(".style").append("<h2>" +"Your favorite color is " + favcolor + " and you chose room " + num + ". You are.. " + reply + "."+"</h2>");
$(".aesthetic").attr("src", "preppy.jpeg");
}
  
else if (favcolor == "blue" && num >=4){
reply = "mixed";
$(".style").append("<h2>" +"Your favorite color is " + favcolor + " and you chose room " + num + ". You are.. " + reply + "."+"</h2>");
$(".aesthetic").attr("src", "mix.jpeg");
}

else if (favcolor == "black" && num >=2){
reply = "emo";
$(".style").append("<h2>" +"Your favorite color is " + favcolor + " and you chose room " + num + ". You are.. " + reply + "."+"</h2>");
$(".aesthetic").attr("src", "emo.jpeg");
}

else if (num >= 3 && favcolor == "purple") {
reply = "indie";
$(".style").append("<h2>" +"Your favorite color is " + favcolor + " and you chose room " + num + ". You are.. " + reply + "."+"</h2>");
$(".aesthetic").attr("src", "indie.jpeg");
}

else if (num <= 2 && favcolor == "pink") {
reply = "preppy";
$(".style").append("<h2>" +"Your favorite color is " + favcolor + " and you chose room " + num + ". You are.. " + reply + "."+"</h2>");
$(".aesthetic").attr("src", "preppy.jpeg");
}

else if (num >= 1 && favcolor == "blue") {
reply = "mixed";
$(".style").append("<h2>" +"Your favorite color is " + favcolor + " and you chose room " + num + ". You are.. " + reply + "."+"</h2>");
$(".aesthetic").attr("src", "mix.jpeg");
}

else{
$(".style").append("<h3>" + "Sorry, try again." + "</h3>");
$(".aesthetic").attr("src", "cat.jpeg");
}});


$(".restart").click(function(){
$(".answers").hide();
$('.counter').text(Number($('.counter').text())+1);
});