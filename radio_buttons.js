function activityTypeClickListener(element) {
  // console.log(element.target);
  if (element.target.getAttribute("selected") === "true") {
    element.target.setAttribute("selected", "false");
  } else {
    element.target.setAttribute("selected", "true");
  }
  // update selected_activities_list
  const activityTypes = document.querySelectorAll(".activity-type");
  selected_activities_list = [];
  activityTypes.forEach((activityType) => {
    if (activityType.getAttribute("selected") === "true") {
      selected_activities_list.push(activityType.innerText);
    }
  });
  draw_graph();
}
function listActivitiesTypeClick() {
  const activityTypes = document.querySelectorAll(".activity-type");
  activityTypes.forEach((activityType) => {
    activityType.onclick = activityTypeClickListener;
  });
}
listActivitiesTypeClick();
