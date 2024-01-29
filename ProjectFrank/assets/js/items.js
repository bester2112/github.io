document.addEventListener("DOMContentLoaded", function () {
  const clickableCloseModalElements = document.querySelectorAll(
    "#modals-container .modal-close-icon"
  );

  clickableCloseModalElements.forEach(function (element) {
    element.addEventListener("click", function () {
      const modalContainerElement = document.querySelector("#modals-container");
      // Access the parent node
      const parentNode = element.parentNode;
      // Access the grandparent node
      const grandparentNode = parentNode.parentNode;
      grandparentNode.classList.toggle("show-item");
      modalContainerElement.classList.toggle("show-item");
    });
  });
});

function handleElementClick(event) {
  const clickedElement = event.target;
  const nameElement = clickedElement.name;
  const modalContainerElement = document.querySelector("#modals-container");
  const modalElement = document.querySelector(`#modal-${nameElement}`);
  modalContainerElement.classList.toggle("show-item");
  modalElement.classList.toggle("show-item");
  event.stopPropagation();
}
