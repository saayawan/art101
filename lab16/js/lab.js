// lab.js - Lab 16: JSON and APIs
// Author: Saaya Wan
// Date: 2025-06-05

function getAndDisplayComic(comicNum = "") {
  let xkcdUrl = comicNum
    ? `https://xkcd.com/${comicNum}/info.0.json`
    : `https://xkcd.com/info.0.json`;

  let proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(xkcdUrl)}`;

  $.ajax({
    url: proxyUrl,
    type: "GET",
    dataType: "json",
    success: function (comicObj) {
      console.log("Comic Data:", comicObj);

      let title = `<h3>${comicObj.title}</h3>`;
      let image = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}" width="600">`;
      let altText = `<p><em>${comicObj.alt}</em></p>`;
      let outputHTML = title + image + altText;

      $("#output").html(outputHTML);

      $("#output").data("comicNum", comicObj.num);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error:", textStatus, errorThrown);
      $("#output").html("<p>Failed to load comic. Try again later.</p>");
    }
  });
}

$(document).ready(function () {
  getAndDisplayComic();

  $("#prev").click(function () {
    let current = $("#output").data("comicNum");
    if (current > 1) {
      getAndDisplayComic(current - 1);
    }
  });

  $("#next").click(function () {
    let current = $("#output").data("comicNum");
    getAndDisplayComic(current + 1);
  });
});
