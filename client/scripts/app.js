var peopleArray = [];
//var twoGroups = 0;
//var threeGroups = 0;
//var fourGroups = 0;
//var fiveGroups = 0;
//var sixGroups = 0;
//var sevenGroups = 0;
//var eightGroups = 0;
//var nineGroups = 0;
//var tenGroups = 0;
//var elevenGroups = 0;

var teamSize;

$(document).ready(function(){
   var buttonStart = function(data){
        $('#info').append('<div class = "buttons"></div>'); // appending a div for each student
        var buttons = $("#info").children().last();
        buttons.append("<h3>Random Group Generator</h3>");
        buttons.append("<button class = 'btn btn2' data-'2'>2</button>");
        buttons.append("<button class = 'btn btn3'>3</button>");
        buttons.append("<button class = 'btn btn4'>4</button>");
        buttons.append("<button class = 'btn btn5'>5</button>");
        buttons.append("<button class = 'btn btn6'>6</button>");
        buttons.append("<button class = 'btn btn7'>7</button>");
        buttons.append("<button class = 'btn btn8'>8</button>");
        buttons.append("<button class = 'btn btn9'>9</button>");
        buttons.append("<button class = 'btn btn10'>10</button>");
        buttons.append("<button class = 'btn btn11'>11</button></br>");
        buttons.append("<button class = 'btnRandom'>Randomize</button>");
    };

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    $.ajax({
        url: "/data",
        success: function(data){
                buttonStart();


            $.each (data, function(){
                peopleArray.push(this.name);
                shuffle(peopleArray);
                //console.log(peopleArray);
                //console.log("Trying to get names " + data);
                //console.log(peopleArray.length);
            });

            },
        error: function(){
            console.log("This is broken");
        },
        complete: function(data){
            //console.log(peopleArray);
            console.log("Ajax is complete!");

            $('body').on("click", ".btnRandom", function(){

                shuffle(peopleArray);
                splitTeams(peopleArray);
                console.log(peopleArray);

                // get the value of number button clicked previously
                // store the value
                // spit out the number of students per div per number button
                console.log(teamSize);


            }); // end click random button
        } // end complete function
        }); // end ajax call

        $("body").on("click", ".btn2", function(){
            teamSize = 2;
            console.log(teamSize);
            $(".btn2").addClass("active");
            });
        $("body").on("click", ".btn3", function(){
            teamSize = 3;
            console.log(teamSize);
            $(".btn3").addClass("active");
        });
        $("body").on("click", ".btn4", function(){
            teamSize = 4;
            console.log(teamSize);
            $(".btn4").addClass("active");
        });
        $("body").on("click", ".btn5", function(){
            teamSize = 5;
            console.log(teamSize);
            $(".btn5").addClass("active");
        });
        $("body").on("click", ".btn6", function(){
            teamSize = 6;
            console.log(teamSize);
            $(".btn6").addClass("active");
        });
        $("body").on("click", ".btn7", function(){
            teamSize = 7;
            console.log(teamSize);
            $(".btn7").addClass("active");
        });
        $("body").on("click", ".btn8", function(){
            teamSize = 8;
            console.log(teamSize);
            $(".btn8").addClass("active");
        });
        $("body").on("click", ".btn9", function(){
            teamSize = 9;
            console.log(teamSize);
            $(".btn9").addClass("active");
        });
        $("body").on("click", ".btn10", function(){
            teamSize = 10;
            console.log(teamSize);
            $(".btn10").addClass("active");
        });
        $("body").on("click", ".btn11", function(){
            teamSize = 11;
            console.log(teamSize);
            $(".btn11").addClass("active");

        });
}); // end document ready

function splitTeams(array){
    $(".groupSections").children().remove();
    for(var i = 1; i<= teamSize; i++){ //creating the different divs for the groups
        $(".groupSections").append("<div class = 'group" + i + "'><h4>Group " + i + " </h4></div>");
        // this is looping through the team sizes and creating the divs of the number of groups.
    }
    var teamIndex = 1; // by setting the index to one we are taking care of the whole array thing where they start
    // at 0. if you don't set this to 1 you lose a whole person
    for(var j = 0; j < array.length; j++){ //creating a loop to go through the array
        $(".group" + teamIndex).append("<p>" + peopleArray[j] + "</p>");
        var fade = $(".group" + teamIndex).children().last();
        fade.hide().delay(200 * j).slideDown(); /// this is taking the person you are on in
        // the loop by the j reference. and appending that to the same number group you are on example: you are on person
        // 4 they would be assigned to group 4
        if (teamIndex < teamSize) { // this is saying that as long as the team index or the person is less than the
            // number of groups you are going to increment i or go to the next person
            teamIndex++;
        }else{
            teamIndex = 1; // this is saying that if the teamIndex is greater then the teamNumber. Or basically you
            // have filled up the number of groups like you are on person 4 and there are only three groups. You are going
            // to start the loop over and start populating the first team again.
        }
    }
}
    //for(var j = 0; j < peopleArray.length; j++){
    //
    //}

//var $el = $("#groupSections");
//$el.append("<div id = 'groupContainer1'></div>");
//$el.append("<div id = 'groupContainer2'></div>");
//for(var i = 0; i< peopleArray.length; i++) {
//    console.log("Button two has been clicked!");
//    //$('#groupContainer1').append(peopleArray);
//    //$('#groupContainer2').append(peopleArray);