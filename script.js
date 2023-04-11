//random String
const randomString = Math.random().toString(36).slice(2);
console.log(randomString);
//detect dark mode
const isDarkMode = window.matchMedia && 
window.matchMedia('(prefers-color-scheme:dark)').match;