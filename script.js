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

  //Makes the selected tab visible
  document.getElementById(tabName).style.display = "block";

  //Marks the selected tab's button as active
  evt.currentTarget.className += " active";
}
