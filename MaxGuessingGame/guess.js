/* function that starts when the buttom in the HTML code is clicked */
function startquiz() {
    var currentQuestion;
    var NumberOfQuestionsCorrect=0;
    var UserAnswer= [];
    var CorrectAnswer = [ "yes",
                          "no",
                          "yes" ];
    var shortCorrectAnswer = [ "y",
                                    "n",
                                    "y"];
    var WrongAnswer = [ "no",
                        "yes",
                        "no"];
    var shortWrongAnswer = [ "n",
                                  "y",
                                  "n"];
    var questionAsked = [ "Question 1: Have I ever worked at Jamba Juice?",

                         "Question 2: Do I know the extension of pi to 50 " +
                         "decimal places?",

                         "Question 3: Have I every fallen on my face when dunking a basketball?" ];
    var NumberOfQuestions = questionAsked.length;
    var imageCorrect = "<img class=\"correct\" src=\"images/green.jpg\" \\>";
    var imageIncorrect = "<img class=\"incorrect\" src=\"images/red.jpg\" \\>";
    var painfulVideo = "<p><iframe id=\"PainfulVideo\" src=\"https://www.youtube.com/embed/bHAMG87YTgY\" "
                       + "frameborder=\"0\" allowfullscreen></iframe></p>";
    var AlertStringCorrectAnswer = [ imageCorrect + "  Correct, I was a pro at making smoothies.",
                                     imageCorrect + "  Correct, 3.1415 is about as far as I can get. ",
                                     imageCorrect + "  Correct, you can watch the video below. " +
                                     "Don't worry I was okay. " + painfulVideo ];

    var AlertStringWrongAnswer = [ imageIncorrect + "  Sorry the correct answer was yes. " +
                                   "I am a pro when it comes to making smoothies.",
                                   imageIncorrect + "  I don't actually, 3.1415 is as far as I can get.",
                                   imageIncorrect + "  Unfortunately the answer is yes. You can watch " +
                                   "the video below." + painfulVideo ];
    var NotValidAnswer = "That is not a valid answer. Please enter yes or no.";
    var AlertNull = "Looks like you have entered a empty string or hit cancel" +
                    " during the quiz. If you would like to start the quiz over " +
                    "please hit the start quiz button.";
    var NameEntered=false;
    /* Gets Users Name */
  while( !NameEntered ) {
     var name = prompt ( "Before we start the quiz, can you please tell me" +
        " your name?" );
     if(isNaN(name)) {
        NameEntered = true;
      } else if (( name === "" ) || ( name === null )) {
        alert(AlertNull);
        NameEntered = true;
        return;
      } else {
        alert( "That is not a valid name. Please try again" ) ;
      }
    }




   for(ii=0; ii < NumberOfQuestions; ii++) {
     var paragraph;
     var questions;
     var ValidAnswer = false;
     while ( !ValidAnswer ) {
       UserAnswer[ii] = prompt(questionAsked[ii]);
       if ( (UserAnswer[ii].toLowerCase() === CorrectAnswer[ii]) ||
          (UserAnswer[ii].toLowerCase() === shortCorrectAnswer[ii] )) {
          NumberOfQuestionsCorrect++;
          paragraph = document.getElementById('alert' + ( ii + 1 ) );
	        paragraph.setAttribute("style", "color:green;");
          paragraph.innerHTML = "<p>" + questionAsked[ii] + "</p>" + "<p> You Answered: " + UserAnswer[ii] + "</p>" +
          AlertStringCorrectAnswer[ii];
          ValidAnswer = true;
        } else if( (UserAnswer[ii].toLowerCase() === WrongAnswer[ii]) ||
           (UserAnswer[ii].toLowerCase() === shortWrongAnswer[ii] )) {
          paragraph = document.getElementById('alert' + ( ii + 1 ) );
	        paragraph.setAttribute("style", "color:red;");
          paragraph.innerHTML = "<p>" + questionAsked[ii] + "</p>"  + "<p> You Answered: " + UserAnswer[ii] + "</p>" +
          AlertStringWrongAnswer[ii];
          ValidAnswer = true;
        } else if (( UserAnswer[ii] === "" ) || ( UserAnswer[ii] === null )) {
          alert(AlertNull);
          return;
        } else {
          alert("That is not a valid answer, please enter yes or no.");
        }
      }
    }

    for( jj=0; jj < NumberOfQuestions; jj++ ) {
      if ( NumberOfQuestionsCorrect === jj ) {
         var finalparagraph;
         finalparagraph = document.getElementById('finalalert');
         finalparagraph.innerHTML = ( "Thanks for playing the quiz " + name + ", you got " +
     		    NumberOfQuestionsCorrect + " out of " + NumberOfQuestions +" questions correct." );
      }
    }
 }
