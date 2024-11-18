
// -------start changeBg ------------
const button=document.querySelector("button");
const changeBg=()=> {
   const hexVal=Math.floor(Math.random()*0xffffff).toString(16);
   document.body.style.backgroundColor=`#${hexVal}`;
};
button.addEventListener("click", changeBg);
// ------end changeBg --------






// ----------start Quotes-----
const quotes = [
   { quote: `“Some day you will be old enough to start reading fairy tales again”`,
   writer:`― C.S. Lewis`},

   {quote: `“To die will be an awfully big adventure”`,
   writer:`― J.M. Barrie, Peter Pan`
},

{
   quote: `“And in that moment, I swear we were infinite”`,
   writer:`― Stephen Chbosky`
},

{
   quote: `“Anyone who has never made a mistake has never tried anything new”`,
   writer:`― Albert Einstein`
},

{
   quote: `“Never tell the truth to people who are not worthy of it”`,
   writer:`― Mark Twain`
},{
   quote: `“I wish I could freeze this moment, right here, right now and live in it forever”`,
   writer:`― Suzanne Collins`
},{
   quote: `“Life is an awful, ugly place to not have a best friend”`,
   writer:`― Sarah Dessen`
},{
   quote: `“The world is not a wish-granting factory”`,
   writer:`― John Green`
},{
   quote: `“I am not pretty. I am not beautiful. I am as radiant as the sun”`,
   writer:`― Suzanne Collins`
},{
   quote: `“Never love anyone who treats you like you're ordinary”`,
   writer:`― Oscar Wilde `
}]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
   let random = Math.floor(Math.random()*quotes.length);
   quote.innerHTML= quotes[random].quote;
   
   writer.innerHTML= quotes[random].writer;
})

// -------- End  Quotes --------

