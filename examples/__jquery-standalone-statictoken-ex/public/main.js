function fetchAPI() {
  function renderContent(content) {
    const $content = $('#content');
    $content.fadeOut('slow', () =>
      $content.text(content).css('color', 'red').fadeIn('slow')
    );
  }
  return Kuroco.StaticToken.ApiService.getApiServiceRcmsApi3Test({})
    .then((res) => renderContent(JSON.stringify(res.body, null, '\t')))
    .catch((err) => renderContent(JSON.stringify(err, null, '\t')));
}

// inject static token (if the fetch function raises 401 error, change this value)
function setStaticToken(token) {
  Kuroco.StaticToken.LocalStorage.setAccessToken(token);
}
function deleteStaticToken() {
  Kuroco.StaticToken.LocalStorage.deleteAccessToken();
}

$(() => {
  const token = $('#token_input').val();
  $('#set_token').on('click', () => setStaticToken(token));
  $('#delete_token').on('click', deleteStaticToken);

  $('#fetch').on('click', fetchAPI);
});
