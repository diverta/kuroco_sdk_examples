import $ from "jquery";
import { TopicsApi, useDevServer } from "kuroco";

useDevServer(true);

$(function() {
  const $content = $("#content");
  getTopicsList().then(list => {
    const topicsIDs = list.map(({ topics_id }) => topics_id).join("\n");

    $content.fadeOut("slow", function() {
      $content
        .text(topicsIDs)
        .css("color", "red")
        .fadeIn("slow");
    });
  });
});

function getTopicsList() {
  const topicsApi = new TopicsApi();
  return topicsApi
    .rcmsApiFeedsGet({})
    .then(responseRaw => responseRaw.value())
    .then(responseFeed => responseFeed.list);
}
