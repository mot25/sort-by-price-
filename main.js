let test = document.querySelector(".nav");
let nav = test.children;

// let replacedNode = test.replaceChild(nav[1], nav[0])

document.querySelector("#sort-asc").onclick = mySort;
document.querySelector("#sort-desc").onclick = mySortDesc;
document.querySelector("#sort-rating").onclick = myRating;

function mySort() {
    // 2 фора сравнение 1 и 2 

  for (let i = 0; i < nav.length; i++) {
    for (let j = i; j < nav.length; j++) {

      if (
          // плюс для того чтобы не сравнивалась строка
        +nav[i].getAttribute("data-sort") > +nav[j].getAttribute("data-sort")
    
      ) {
          // Заменяет дочерний элемент на выбранный. Возвращает заменённый элемент. Первый элемент будут заменять 2 
        let replacedNode = test.replaceChild(nav[j], nav[i]);
        insertAfter(replacedNode, nav[i]);
      }
    }
  }
}
function mySortDesc() {
    // 2 фора сравнение 1 и 2 
  for (let i = 0; i < nav.length; i++) {
    for (let j = i; j < nav.length; j++) {
      if (
          // плюс для того чтобы не сравнивалась строка
        +nav[i].getAttribute("data-sort") < +nav[j].getAttribute("data-sort")
      ) {
          // Заменяет дочерний элемент на выбранный. Возвращает заменённый элемент. Первый элемент будут заменять 2 
        let replacedNode = test.replaceChild(nav[j], nav[i]);
        insertAfter(replacedNode, nav[i]);
      }
    }
  }
}
// функция которая вставляет после элемента который мы вставили 
function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


function myRating() {
    // 2 фора сравнение 1 и 2 
  for (let i = 0; i < nav.length; i++) {
    for (let j = i; j < nav.length; j++) {
      if (
          // плюс для того чтобы не сравнивалась строка
        +nav[i].getAttribute("data-rating") > +nav[j].getAttribute("data-rating")
      ) {
          // Заменяет дочерний элемент на выбранный. Возвращает заменённый элемент. Первый элемент будут заменять 2 
        let replacedNode = test.replaceChild(nav[j], nav[i]);
        insertAfter(replacedNode, nav[i]);
      }
    }
  }
}
// функция которая вставляет после элемента который мы вставили 
function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
