function status(e, tasklist) {
  if (e.target.classList.contains('unchecked')) {
    e.target.classList.value = 'checked';
    tasklist.completed = true;
  } else if (e.target.classList.contains('checked')) {
    e.target.classList.value = 'unchecked';
    tasklist.completed = false;
  }
}

export default status;