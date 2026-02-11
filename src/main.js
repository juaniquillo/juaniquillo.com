
document.querySelectorAll('[data-dialog]').forEach(button => {
    button.addEventListener('click', () => {
        const dialogId = button.dataset.dialog;
        const dialog = document.getElementById(dialogId);
        dialog.showModal();
    });
});

document.querySelectorAll('dialog button').forEach(button => {
    button.addEventListener('click', () => {
        const dialog = button.closest('dialog');
        dialog.close();
    });
});
