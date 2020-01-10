import $ from "jquery";
import { TopicsApi, useDevServer } from "kuroco";

useDevServer(true);

$(function() {
  getTopicsList()
    .then(list => {
      const topicsIDsMsg = list.map(({ topics_id }) => topics_id).join("\n");
      renderMsg(topicsIDsMsg);
    })
    .catch(err => {
      renderMsg(
        ["Oops! something error was occured!", err.toString()].join("\n")
      );
    });
});

function renderMsg(msg) {
  const $content = $("#content");
  $content.fadeOut("slow", function() {
    $content
      .text(msg)
      .css("color", "red")
      .fadeIn("slow");
  });
}

function getTopicsList() {
  const topicsApi = new TopicsApi();
  return topicsApi
    .rcmsApiFeedsGet({})
    .then(responseRaw => responseRaw.value())
    .then(responseFeed => responseFeed.list);
}
