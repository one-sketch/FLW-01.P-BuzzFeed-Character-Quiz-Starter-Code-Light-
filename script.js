document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let display = document.querySelector(".display");
  let book = document.querySelector(".book");
  let anime = document.querySelector(".anime");
  let genre = document.querySelector(".genre");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.

  let imgSrc;
  let cereal;
  let bookScore;
  let animeScore;
  let genreScore;


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    
    let userBook = book.value.toLowerCase();
    let userAnime = anime.value.toLowerCase();
    let userGenre = genre.value.toLowerCase();




    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    if (userBook === "the hunger games") {
      bookScore = 5;
    } else if (userBook === "Harry Potter") {
      bookScore = 6;
    } else if (userBook === "shadow and bone") {
      bookScore = 9;
    } else if (userBook === "to all the boys i loved before"){
      bookScore = 2;
    } else {
      bookScore = 0;
    }



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.

if (userAnime === "my hero academia ") {
  animeScore = 3;
} else if (userAnime === "one punch man") {
  animeScore = 8;
} else if (userAnime === "bleach") {
  animeScore = 5;
} else if (userAnime === "tokyo ghoul") {
  animeScore = 6;
} else {
  animeScore = 0;
}


    // task 9: create a conditional statement for the responses to Question 3 based on the user input.

if (userGenre === "fantasy") {
  genreScore = 5;
} else if (userGenre === "action") {
  genreScore = 3;
} else if (userGenre === "horror") {
  genreScore = 7;
} else if (userGenre === "comedy") {
  genreScore = 4;
} else {
  genreScore = 0;
}
  


    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.

let totalScore = bookScore + animeScore + genreScore;
    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.


if (totalScore <= 8 ) {
  cereal = "Mini Wheats";
  imgSrc = "https://imgs.search.brave.com/Ccz5XSxTExpKe8_EAHDN-9l4EkK2RxxFh2e9HYezppk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9rZWxs/b2dnLWguYXNzZXRz/YWRvYmUuY29tL2lz/L2ltYWdlL2NvbnRl/bnQvZGFtL2tlbGxv/Z2dzL2tuYS91cy9k/aWdpdGFsLXNoZWxm/L21pbmktd2hlYXRz/LzAwMDM4MDAwMjE5/ODI1X0QxQ0YuanBn";display.innerHTML = `<h2>You are clearly ${cereal}!</h2></br><img src="${imgSrc}">`;
} else if (totalScore > 11 && totalScore <= 15) {
  cereal = "Cheerios";
  imgSrc = "https://imgs.search.brave.com/P2Vy3ETueUsZNFTcCt0b3o7LXy1nUb6-a0zknY8SnqM/rs:fit:1024:763:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vanVua2Jh/bnRlci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDMv/SU1HXzE3MjcuanBn"; display.innerHTML = `<h2>You are clearly ${cereal}!</h2></br><img src="${imgSrc}">`;
} else if (totalScore > 16 && totalScore <= 18){
  cereal = "Rice Krispies";
  imgSrc = "https://imgs.search.brave.com/F6ckO_ue4zO48W3t6nhlJ_PLjoJ-psbhAo-S4nKIQSQ/rs:fit:512:400:1/g:ce/aHR0cHM6Ly92cGMt/cHJvZC10aHVtYm9y/LXB1YmxpYy1nY3Au/Ym94ZWQuY29tL3Vu/c2FmZS9maXQtaW4v/NTEyeDQwMC9maWx0/ZXJzOnF1YWxpdHko/MTAwKTptYXhfYnl0/ZXMoMjAwMDAwKTpm/aWxsKHdoaXRlKS9o/dHRwczovL3N0YXRp/Yy1hc3NldHMuYm94/ZWQuY29tLzE1ODAy/MjY4MzUwNjIuanBn";
  display.innerHTML = `<h2>You are clearly ${cereal}!</h2></br><img src="${imgSrc}">`;
}   else if (totalScore > 19 && totalScore <= 21){
  cereal = "Raisin Bran";
  imgSrc = "https://imgs.search.brave.com/svmJb1x7xQ38x-5EqVt3fq_qCHmxsDY5RYovj3uGDiI/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNmZh/MmYzZDctOGVjMy00/ZjNjLTgyMTgtZTNk/NjAzNTQ1YTE0XzEu/ZjgyYTY3NmRjMzUz/OTAxODg2OTA0YjFi/NDc2MzAzZWEuanBl/Zz9vZG5XaWR0aD0x/MDAwJm9kbkhlaWdo/dD0xMDAwJm9kbkJn/PWZmZmZmZg";
  display.innerHTML = `<h2>You are clearly ${cereal}!</h2></br><img src="${imgSrc}">`;
} else if (totalScore > 22 && totalScore <= 24){
  cereal = "Captain Crunch";
  imgSrc = "https://imgs.search.brave.com/xmybydUYWIL6gpRpdFH7-5pa1N-Vm1HOJw30saONCdw/rs:fit:800:800:1/g:ce/aHR0cHM6Ly93d3cu/dXNhZm9vZHN0b3Jl/LmNvLnVrL3VzZXIv/cHJvZHVjdHMvbGFy/Z2UvY2FwdGFpbi1j/cnVuY2gyLmpwZw";
  display.innerHTML = `<h2>You are clearly ${cereal}!</h2></br><img src="${imgSrc}">`;
}


  
  };
}