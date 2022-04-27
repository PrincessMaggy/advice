let text = document.querySelector('#text');
let author = document.querySelector('#author');
let tweetButton = document.querySelector('#tweet-quote');

let newQuote = document.querySelector('#new-quote');

const getNewQuote = async() => {
    let url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const allQuotes = await response.json();

    const indx = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[indx].text;
    const auth = allQuotes[indx].author;
    if (auth == null) {
        author = "Anonymous";
    }
    text.innerHTML = quote;
    author.innerHTML = auth;

    //tweet the quote
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;

}

getNewQuote();

newQuote.addEventListener('click', () => getNewQuote()

);