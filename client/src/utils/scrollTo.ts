export const scrollTo = (topOffset = 0) => {
    setTimeout(() => {
        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        });
    }, 0);
};
