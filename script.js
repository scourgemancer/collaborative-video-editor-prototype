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

/*Create all of the starting content for the tabs*/
function initializeTabs() {
  initializeVideosTab();
  initializeToolsTab();
  initializeShareTab();
  initializeChatTab();
  initializeVideoContainer();
}

/*Creates the video elements in the videos tab*/
function initializeVideosTab() {
  //todo - delete background image in css and implement actual content
}

/*Creates the categrorie and tool elements*/
function initializeToolsTab() {
  //todo - delete background image in css and implement actual content
}

/*Creates the social media elements*/
function initializeShareTab() {
  //todo - delete background image in css and implement actual content
}

/*Creates the chat container and it's initial messages*/
function initializeChatTab() {
  //todo - delete background image in css and implement actual content
}

/*Creates the initial video container*/
function initializeVideoContainer() {
  //todo - delete background image in css and implement actual content
}

/*Opens a local video in the video container*/
function openVideo(filename) {
  //todo - delete background image in css and implement actual content
}
