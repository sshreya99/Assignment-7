/*eslint-env browser*/
/*jslint-env browser*/

//STEP 1
var favMovies = ["Batman", "Oceans 11", "Avengers", "October Sky", "WallE"];
document.write(favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
document.write(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";

movies.splice(2,0,"Shawshank Redemption");
document.write(movies.length);

//STEP 4
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";

delete movies[0];
document.write(movies);

//STEP 5
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";

for(var i = 0; i < movies.length; i++){
    document.write(movies[i]);
}

//STEP 6
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";
for(index in movies){
    document.write(movies[index]);
}

//STEP 7
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";
movies.sort();
for(index in movies){
    document.write(movies[index]);
}

//STEP 8
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";

var favMovies = [];
favMovies[0] = "The Wolfman";
favMovies[1] = "Skyline";
favMovies[2] = "The Last Airbender";
var str = "";
str += ("Movies I like:" + "\n" + "\n");
for(var i = 0; i < movies.length; i++){
    str += (movies[i] + "\n");
}

str += ("..." + "\n\n");
str += ("Movies I regret watching:" + "\n" + "\n");
for(var i = 0; i < favMovies.length; i++){
    str += (favMovies[i] + "\n");
}

str += "...";

document.write(str);

//STEP 9
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";

var favMovies = [];
favMovies[0] = "The Wolfman";
favMovies[1] = "Skyline";
favMovies[2] = "The Last Airbender";

var movies = movies.concat(favMovies);
(movies.sort()).reverse();
document.write(movies);

//STEP 10
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";

var favMovies = [];
favMovies[0] = "The Wolfman";
favMovies[1] = "Skyline";
favMovies[2] = "The Last Airbender";

var movies = movies.concat(favMovies);
(movies.sort()).reverse();
document.write(movies.pop());

