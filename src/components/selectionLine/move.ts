import React from "react";

let isDown = false;
let startX = 0;
let scrollLeft = 0;
export const mouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    isDown = true;
    event.currentTarget.classList.add('active');
    startX = event.pageX - event.currentTarget.offsetLeft;
    scrollLeft = event.currentTarget.scrollLeft;
}
export const mouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    isDown = false;
    event.currentTarget.classList.remove('active');
}
export const mouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    isDown = false;
    event.currentTarget.classList.remove('active');
}
export const mouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(!isDown) return;
    event.preventDefault();
    const x = event.pageX - event.currentTarget.offsetLeft;
    const walk = (x - startX); //scroll-fast
    event.currentTarget.scrollLeft = scrollLeft - walk;
}
