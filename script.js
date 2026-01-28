const accesskey="W8uqEg4CjECKUbkjaXykiU9NOtANzpZ08S8pEuE2gQU";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;
async function searchImages(){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  
  if(page === 1 ){
    searchResult.innerHTML = "";
  }

  const results = data.results;

//   results.forEach((result) =>{
//     const image = document.createElement("img");
//     image.src = result.urls.small;
//     const imageLink = document.createElement("a");
//     imageLink.href = result.links.html;
//     imageLink.target = "_blank";

//     imageLink.appendChild(image);
//     searchResult.appendChild(imageLink);
//   })
//   showMoreBtn.style.display = "block";
// }

results.forEach((result) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-card");

  const image = document.createElement("img");
  image.src = result.urls.small;

  const imageLink = document.createElement("a");
  imageLink.href = result.links.html;
  imageLink.target = "_blank";
  imageLink.appendChild(image);

  const photographer = document.createElement("p");
  photographer.innerText = `📸 ${result.user.name}`;

  const likes = document.createElement("p");
  likes.innerText = `❤️ Likes: ${result.likes}`;

  const downloadBtn = document.createElement("a");
  downloadBtn.innerText = "⬇️ Download";
  downloadBtn.href = result.links.download;
  downloadBtn.target = "_blank";

  imageContainer.appendChild(imageLink);
  imageContainer.appendChild(photographer);
  imageContainer.appendChild(likes);
  imageContainer.appendChild(downloadBtn);

  searchResult.appendChild(imageContainer);
});
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page=1;
  searchImages();
}) 

showMoreBtn.addEventListener("click", ()=>{
  page++;
  searchImages();
})