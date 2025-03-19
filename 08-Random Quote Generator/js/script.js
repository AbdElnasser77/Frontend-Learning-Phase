// “Be yourself; everyone else is already taken.” \n ― Oscar Wilde

// var quote = [ "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” \n ― Marilyn Monroe"];

var quote = [
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br>― Marilyn Monroe" , "“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde" , "“So many books, so little time.” <br> ― Frank Zappa" , "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> ― Albert Einstein" , "“A room without books is like a body without a soul.” <br> ― Marcus Tullius Cicero" , "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br> ― Bernard M. Baruch" 
  ];

var number;
function randomQuote(){
    
    do{
        var randomNumber = Math.ceil(Math.random() * quote.length)-1;
    }while(randomNumber == number);
    
    document.getElementById("Quote-Container").innerHTML = quote[randomNumber];

    number = randomNumber;    
}
