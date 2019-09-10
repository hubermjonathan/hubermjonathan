$("#go-to-projects").click(function () {
  $("#projects").removeClass("hidden");
  $("#landing").addClass("hidden");
});

$("#go-to-landing").click(function () {
  $("#landing").removeClass("hidden");
  $("#projects").addClass("hidden");
});
