function tabs(evt, tabName) {
  const clickedButton = evt.currentTarget;
  const tabContainer = clickedButton.closest(".tab");
  const tabLinks = tabContainer.querySelectorAll(".tablinks");
  const tabContents = Array.from(tabLinks).map(btn => {
    const id = btn.getAttribute("onclick").match(/'([^']+)'/)[1];
    return document.getElementById(id);
  });
  tabContents.forEach(content => {
    if (content) content.style.display = "none";
  });
  tabLinks.forEach(btn => {
    btn.className = btn.className.replace(" active", "");
  });
  const currentTab = document.getElementById(tabName);
  if (currentTab) currentTab.style.display = "block";
  clickedButton.className += " active";
}
document.querySelectorAll("#defaultOpen").forEach(btn => btn.click());
