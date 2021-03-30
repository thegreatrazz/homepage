import $ from "jquery";
import links from "./links.json";

//
// load the links onto the page
//

console.log({ links });
let sectionContainer = $("body > main");
for (const section of links) {
  let sectionEl = $("<section />").append($("<h1 />").text(section.title));
  let listEl = $("<ul />").appendTo(sectionEl);
  for (const link of section.links) {
    let listItemEl = $("<li />");
    if (link === null) {
      listItemEl.addClass("separator").appendTo(listEl);
      continue;
    }
    listItemEl
      .append($("<a />").attr("href", link.href).text(link.name))
      .appendTo(listEl);
  }
  sectionEl.appendTo(sectionContainer);
}

//
// search the internet box
//

const bangs: [bang: string, description: string][] = [
  // Google stuff
  ["!g", "Google"],
  ["!gphotos", "Google Photos"],
  ["!maps", "Google Maps"],

  // additional searches
  ["!img", "Search images"],
  ["!video", "Search videos"],

  // tools
  ["!bitly", "Shorten links"],
  ["!isitup", "Is the website up?"],

  // Media consumption
  ["!yt", "YouTube"],
  ["!spy", "Spotify"],
  ["!applemusic", "Apple Music"],
  ["!scloud", "Soundcloud"],
  ["!xkcd", "sudo make me a sandwitch"],
  ["!xkcd", "xkcd"],
  ["!netflix", "Netflix"],
  ["!netflix", "and chill"],
  ["!tweet", "Twitter"],
  ["!r", "Reddit"],

  // UNIX
  ["!die", "Linux Manual Pages"],
  ["!tldr", "Manual page was too long; didn't read"],
  ["!dman", "Debian Manual Pages"],
  ["!dpkg", "Debian packages"],
  ["!dbugs", "Debian bugs"],
  ["!debfiles", "Which pkg does the file belong to?"],
  ["!pacman", "Arch Linux packages"],
  ["!aur", "Arch User Repositories"],
  ["!archwiki", "Arch Linux Wiki"],
  ["!time", "UNIX timestamp"],

  // Programming
  ["!sx", "Stack Exchange"],
  ["!npm", "Node Package Manager"],

  // Maths
  ["!calc", "Calculator"],
  ["!wa", "Wolfram Alpha"],
  ["!wa", "Calculator powered by magic"],

  // Translation
  ["!tr", "Translate"],
  ["!gtro", "Translate to Romanian"],
  ["!gtro", "traduce către limba română"],
  ["!gtja", "Translate to Japanese"],
  ["!gtja", "日本語にホンヤクする"],
  ["!gtja", "ＡＬＬ　ＹＯＵＲ　ＢＡＳＥ　ＡＲＥ　ＢＥＬＯＮＧ　ＴＯ　ＵＳ"],

  // Dictionary
  ["!jisho", "辞書 Japanese Dictionary"],
  ["!dexonline", "Dicționarul explicativ a limbei române"],

  // Reading
  ["!med", "Medium"],
];

let searchInput = document.querySelector("#search input") as HTMLInputElement;
let searchInputDefaultPlaceholder = searchInput.getAttribute("placeholder");
searchInput.onfocus = () => {
  let index = Math.floor(Math.random() * bangs.length);
  let bang = bangs[index];
  searchInput.setAttribute("placeholder", `${bang[0]} — ${bang[1]}`);
};
searchInput.onblur = () =>
  searchInput.setAttribute("placeholder", searchInputDefaultPlaceholder);
