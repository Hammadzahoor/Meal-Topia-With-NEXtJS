// export function trimTitle(title, maxWords) {
//   const words = title.split(" ");
//   if (words.length <= maxWords) {
//     return title;
//   }
//   return words.slice(0, maxWords).join(" ") + "...";
// }
export function trimText(text, maxLength) {
  return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
}
