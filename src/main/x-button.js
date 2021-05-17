const deleteBar = function(event) {

    const deletedBar = event.target.parentNode;

    deletedBar.remove();

};

export { deleteBar };