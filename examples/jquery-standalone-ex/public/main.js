const { Auth, TopicsService } = Kuroco.Test;

$(() => {
  getTopicsList()
    .then(res => {
      const topicsIDsMsg = res.body.list.map(({ topics_id }) => topics_id).join("\n");
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
  $content.fadeOut("slow", () => {
    $content
      .text(msg)
      .css("color", "red")
      .fadeIn("slow");
  });
}

async function getTopicsList() {
  await Auth.login({
    requestBody: { email: 'test', password: 'qwer1234' },
  })
  return await TopicsService.getTopicsServiceRcmsApi1Topics1({});
}
