
const ulElement = document.querySelector("#categories");
const liItems = ulElement.querySelectorAll(".item");

console.log("Кількість категорій",liItems.length);

liItems.forEach((item) =>{
    const categoruTitle = item.querySelector("h2").textContent;
    const categoruItems = item.querySelectorAll("ul li");

    console.log("Заголовок категорії",categoruTitle);
    console.log("Кількість елементів",categoruItems.length);
});