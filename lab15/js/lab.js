// Lab 15 - Yes/No API using jQuery + AJAX
// Author: Your Name
// Date: 2025-06-02

$("#activate").click(function () {
  console.log("Button clicked!");

  $.ajax({
    url: "https://yesno.wtf/api",
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log("API response:", data);

      // Clear previous result
      $("#output").empty();

      // Display the answer and gif
      $("#output").append(`<p><strong>Answer:</strong> ${data.answer.toUpperCase()}</p>`);
      $("#output").append(`<img src="${data.image}" alt="${data.answer} gif">`);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching data:", textStatus, errorThrown);
      $("#output").html("<p>Error loading data. Please try again later.</p>");
    }
  });
});
