let draggedItem;
function drag(e) {
  draggedItem = e.target;

  const HTMLContent = e.target.innerHTML;
  const checkboxStatus = e.target.querySelector('input').checked;
  e.dataTransfer.setData('html-content', HTMLContent);
  e.dataTransfer.setData('checkbox-status', checkboxStatus);
}

function allowDrop(e) {
  let currentItem;

  if (e.target.parentNode.tagName === 'LI') {
    currentItem = e.target.parentNode;
  } else if (e.target.parentNode.tagName === 'DIV') {
    currentItem = e.target.parentNode.parentNode;
  } else {
    currentItem = e.target;
  }
  e.preventDefault();

  if (draggedItem !== currentItem) {
    draggedItem.innerHTML = currentItem.innerHTML;
    draggedItem.querySelector('input').checked = currentItem.querySelector('input').checked;
    currentItem.innerHTML = '';
    draggedItem = currentItem;
  }
}

function drop(e) {
  const HTMLContent = e.dataTransfer.getData('html-content');
  const checkboxStatus = e.dataTransfer.getData('checkbox-status');

  e.target.innerHTML = HTMLContent;
  e.target.querySelector('input').checked = (checkboxStatus === 'true');
}

export {
  drag, drop, allowDrop,
};
