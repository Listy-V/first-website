function getNewQuote() {
  const getNewQuote = async() =>{
    var url ="https://type.fit/api/quotes";
    const response=await fetch(url);
  }
  const allQuotes = await response.json();
  const indx = Math.floor(Math.random()*allQuotes.length);
  const quote=allQuotes[indx].text; const auth=allQuotes[indx].author;
  if(auth==null) { author = "Anonymous"; } const text=document.getElementById("quote");
  const author=document.getElementById("author");
  text.innerHTML=quote; author.innerHTML="~ "+auth;
}
getNewQuote();

//let numList = ["Да", "Нет", "Возможно", "Полный провал", "Ни при каких обстоятельствах", "Допустимо"];
//let randomElem = numList[Math.floor(Math.random() * numList.length)];
//console.log(randomElem);
