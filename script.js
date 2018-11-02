/*Changes the tab currently being viewed*/
function openTab(evt, tabName) {
  //Makes all tab content invisible
  let tabcontents = document.getElementsByClassName("tabcontent");
  for (let tabcontent of tabcontents) {
    tabcontent.style.display = "none";
  }

  //Marks all tab buttons as inactive
  tablinks = document.getElementsByClassName("tablinks");
  for (let tablink of tablinks) {
    tablink.className = tablink.className.replace(" active", "");
  }

  //Marks the selected tab's button as active
  evt.currentTarget.className += " active";

  //Makes the selected tab visible
  document.getElementById(tabName).style.display = "block";
}
function addVideo(){
  var videoDiv = document.getElementById("Videos");
  var newVid =document.createElement("div");
  newVid.className = "videoDIV";
  var vidName = document.createElement("p");
  vidName.innerHTML="new video";
  vidName.className = "name";
  var vidLength = document.createElement("p");
  vidLength.innerHTML="3:11";
  vidLength.className = "length";
    var vidDate = document.createElement("p");
  vidDate.innerHTML="June 15th, 2018";
  vidDate.className = "date";
    var vidSize = document.createElement("p");
  vidSize.innerHTML="3 MB";
  vidSize.className = "size";
var vidImage = document.createElement("IMG");
vidImage.src="https://image.shutterstock.com/image-photo/funny-man-watermelon-helmet-googles-450w-157354478.jpg";
newVid.appendChild(vidImage);
newVid.appendChild(vidName);
newVid.appendChild(vidLength);
newVid.appendChild(vidDate);
newVid.appendChild(vidSize);
videoDiv.appendChild(newVid);
}
/*Create all of the starting content for the tabs*/
function initializeTabs() {
  initializeVideosTab();
  initializeToolsTab();
  initializeShareTab();
  initializeChatTab();
  initializeVideoContainer();
  initializeBars();
}

/*Creates the video elements in the videos tab*/
function initializeVideosTab() {
  let tab = document.getElementById("Videos");
  //todo - delete background image in css and implement actual content
}

/*Creates the categrorie and tool elements*/
function initializeToolsTab() {
  let tab = document.getElementById("Tools");
  //todo - delete background image in css and implement actual content
}

/*Creates the social media elements*/
function initializeShareTab() {
  let tab = document.getElementById("Share");
  //todo - delete background image in css and implement actual content
}

/*Creates the chat container and it's initial messages*/
function initializeChatTab() {
  let tab = document.getElementById("Chat");
  //todo - delete background image in css and implement actual content
}

/*Creates the initial video container*/
function initializeVideoContainer() {
  let container = document.getElementById("video-container");
  //todo - delete background image in css and implement actual content
}

/*Opens a local video in the video container*/
function openVideo(filename) {
  let container = document.getElementById("video-container");
  //todo - delete background image in css and implement actual content
  openBars(); // change the bars alongside the video
}

/*Changes the bars underneath the video to match it*/
function openBars() {
  openTopBar();
  openBottomBar();
  openScrollbar();
}

/*Changes the top bar underneath the video to match it*/
function openTopBar() {
  let tab = document.getElementById("top-bar");
  //todo - delete css and implement actual content
}

/*Changes the bottom bar underneath the video to match it*/
function openBottomBar() {
  let tab = document.getElementById("bottom-bar");
  //todo - delete css and implement actual content
}

/*Changes the scrollbar for the bars underneath the video*/
function openBottomBar() {
  let tab = document.getElementById("scrollbar");
  //todo - delete css and implement actual content
}

function sendMessage() {
  var text = document.getElementById("text-area").value;
  var textbox = document.getElementById("chat-box");
  textbox.value = textbox.value + "Me: " + text + "\n\n";
}
