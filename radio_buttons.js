function activityTypeClickListener(element) {
  // console.log(element.target);
  if (element.target.getAttribute("selected") === "true") {
    element.target.setAttribute("selected", "false");
  } else {
    element.target.setAttribute("selected", "true");
  }
}
function listActivitiesTypeClick() {
  const activityTypes = document.querySelectorAll(".activity-type");
  activityTypes.forEach((activityType) => {
    activityType.onclick = activityTypeClickListener;
  });
}
listActivitiesTypeClick();
