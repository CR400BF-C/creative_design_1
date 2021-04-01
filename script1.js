<script>
document.write("hello,world!");


function sayHello(){
  var response = prompt("What's your name?");
  alert("Hello "+response+" have a good day!");
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(100,30));

var movieDetails = [
{title: "Avengers",
 time:"12pm",
 status: "available"},
{title: "Captain Marvel",
 time:"2pm",
 status: "unavailable"},
{title: "Black Panther",
 time:"4pm",
 status: "available"},
{title: "Spiderman",
 time:"6pm",
 status: "available"}
];
function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSizen = "25px";
  x.style.color = "red";
}
/*
var movies = ["avengers","captain marvel","black panther","spiderman"];
movies[0]="wonder women";
movies.push("avengers")
movies.pop();
console.log(movies[0]);
*/
/*
var fruits = [];
for (i=1;i<10;i++){
fruits[i]=prompt("enter fruits");
}
alert("fruits contains"+fruits);
*/
for (var movie of movieDetails){
 if (movie.status === "available"){
 console.log("The movie " + movie.title + " plays at " + movie.time)
 }
else{
 console.log("Sorry, the movie " + movie.title + " is sold out.")
 }
};
</script>
