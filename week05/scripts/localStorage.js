const input = document.getElementById("favchap");

const button = document.querySelector("button");

const list = document.querySelector("#list");










// NEW CODE FOR STORAGE


function displayList(item){
    const li = document.createElement("li");
        
    const deleteButton = document.createElement("button");
    
    li.textContent = item;

    
    deleteButton.textContent = "❌";



    li.appendChild(deleteButton);

    list.appendChild(li);

    deleteButton.addEventListener("click", function() {
        list.removeChild(li);

        deleteChapter(li.textContent);

        input.focus();
     });
    

};

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
};

function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
    
};

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);

    chaptersArray = chaptersArray.filter(chap => chap !== chapter);
    setChapterList();

}




//changing the event listener //
button.addEventListener("click", () => {

    if (input.value.trim() !== ""){

        displayList(input.value);

        chaptersArray.push(input.value);

        console.log(chaptersArray);

       

        setChapterList();

        input.value = "";

        input.focus();
    }
});







let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


// LOCAL STORAGE CHAPTERS //


let chaptersArray = getChapterList() || [];



    chaptersArray.forEach(chapter => {

        displayList(chapter);
        
    });



// let chaptersArray = function getChapterList(){

//     if(numVisits === 0 || numVisits === null){
//         return [];
//     }

    

// };