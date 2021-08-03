export const addClass = (ref, newClass) =>
    ref.current.classList.add(`${newClass}`);

export const removeClass = (ref, newClass) =>
    ref.current.classList.remove(`${newClass}`);

export const toggleClass = (ref, newClass) =>
    ref.current.classList.toggle(`${newClass}`);

export const sizeContainer = (ref) => ref.current.getBoundingClientRect()

