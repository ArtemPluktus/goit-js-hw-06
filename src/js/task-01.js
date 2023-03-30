const list = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
    const name = item.querySelector(`h2`);

    console.log(`Category: ${name.textContent}`);   
    
    const items = item.querySelectorAll(`li`);
    
    console.log(`Elements: ${items.length}`);
});