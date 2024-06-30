const quote = document.querySelector(".quote");
const btn = document.querySelector("button");
const author = document.querySelector(".author");

var quotes = [
    {
        quote:"The only limit to our realization of tomorrow is our doubts of today.",
        author:"Franklin D. Roosevelt"
    },
    {
        quote:"Be yourself; everyone else is already taken",
        author:"Oscar Wilde"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
,
        author:"Albert Einstein"
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on."
,
        author:"Robert Frost"
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
,
        author:"Ralph Waldo Emerson"
    }

];

var color = ["red","green","yellow"]
btn.onclick = function(){
    var len = quotes.length;
    var rand = Math.floor(Math.random() * len);
    var col_len = color.length;
    var col_rand = Math.floor(Math.random() * col_len);
    quote.innerHTML = quotes[rand].quote;
    author.innerHTML = quotes[rand].author;
    quote.style.color = color[col_rand];
}
