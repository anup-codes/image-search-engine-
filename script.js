const accesskey="W8uqEg4CjECKUbkjaXykiU9NOtANzpZ08S8pEuE2gQU";

const searchForm = document.getElementById(".search-form");
const searchBox = document.getElementById(".search-box");
const searchResult = document.getElementById(".search-result");
const showMoreBtn = document.getElementById(".show-more-btn");


let keyword = "";
let page = 1;
async function searchImage(){
  keyword = search.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
}