const pTag = document.querySelector("#root");

// pTag.textContent = "hello from js";
pTag.innerHTML = "<a href='https://google.com'> visit google </a>";

const arr = ["one", "two", "three"];
const list = document.querySelector("#list");
for (i = 0; i < arr.length; i++) {
  const node = document.createElement("li");
  node.textContent = arr[i];
  list.appendChild(node);
}

// console.log(pTag);
