// lab.js - Lab 16: JSON and APIs
// Author: Saaya Wan
// Date: 2025-06-05

function getAndDisplayComic(comicNum = "") {
  let url = comicNum ? `https://xkcd.com/${comicNum}/info.0.json` : `https://xkcd.com/info.0.json`;

  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: function(comicObj) {
      console.log(comicObj);

      // Build HTML output
      let title = `<h3>${comicObj.title}</h3>`;
      let image = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}" width="600">`;
      let altText = `<p><em>${comicObj.alt}</em></p>`;
      let output = title + image + altText;

      // Update the page
      $("#output").html(output);
      $("#output").data("comicNum", comicObj.num);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
  });
}

$(document).ready(function() {
  // Load the latest comic initially
  getAndDisplayComic();

  // Button handlers
  $("#prev").click(function() {
    let current = $("#output").data("comicNum");
    if (current > 1) {
      getAndDisplayComic(current - 1);
    }
  });

  $("#next").click(function() {
    let current = $("#output").data("comicNum");
    getAndDisplayComic(current + 1);
  });
});
