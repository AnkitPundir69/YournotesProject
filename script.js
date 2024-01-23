function found(){

  var college = document.getElementById("college").value;
  var year = document.getElementById("year").value;
  var semester = document.getElementById("semester").value;
  var course = document.getElementById("course").value;


  if (college.includes("Graphic Era") && year === "2023" && semester === "4" && course.toLowerCase() === "bca") {
    window.location.href = "subject.html";
  } 
else {
    alert("No database found");
  }
}
