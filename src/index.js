import "./styles.css";

const onclickAdd = () => {
  const inputText = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";
  addToIncompleteList(inputText);
};

const addToIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "listRow";

  const p = document.createElement("p");
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("completeItemsList").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      addToIncompleteList(text);
    });

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    document.getElementById("completeItemsList").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incompleteItemsList").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incompleteItemsList").removeChild(target);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onclickAdd());
