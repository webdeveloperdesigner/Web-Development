function extractQueryParams() {
  var urlInput = document.getElementById('urlInput');
  var resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = '';

  var url = urlInput.value;
  var params = new URLSearchParams(url.split('?')[1]);

  params.forEach(function(value, key) {
    var paramItem = document.createElement('p');
    paramItem.innerHTML = '<strong>' + key + '</strong>: ' + value;
    resultContainer.appendChild(paramItem);
  });
}
