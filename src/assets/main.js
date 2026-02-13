
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

const cube = document.querySelector('.cube');

cube.addEventListener('mouseenter', () => {
  cube.style.animationPlayState = 'paused';
});

cube.addEventListener('mouseleave', () => {
  cube.style.animationPlayState = 'running';
});