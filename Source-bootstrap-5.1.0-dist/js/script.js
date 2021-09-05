var quotes = [
    {proverb:"Be yourself; everyone else is already taken." , author: "-- Oscar Wilde"},
    {proverb:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." , author: "-- Marilyn Monroe"},
    {proverb:"You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth." ,
    author:"William W. Purkey" },
];


function displayQuote()
{
   var randomNumber =  Number(Math.floor(Math.random() * quotes.length));
   document.getElementById("quote").innerHTML = quotes[randomNumber].proverb;
   document.getElementById("author").innerHTML = quotes[randomNumber].author;
}
