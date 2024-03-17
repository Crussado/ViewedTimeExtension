console.log('service on');

const handleTabChange = () => {
  console.log('Change Tab');
  // eslint-disable-next-line no-undef
  chrome.runtime.sendMessage({
    type: 1,
  }, function(response) {
  });
};

  // Escuchar el evento de cambio de URL
// eslint-disable-next-line no-undef
// chrome.tabs.onUpdated.addListener(handleUrlChange);
// eslint-disable-next-line no-undef
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.status==='complete') {
    console.log('UPDATE');
    handleTabChange();
  }

});

// eslint-disable-next-line no-undef
chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
  console.log('ACTIVATE');
  handleTabChange();
});

console.log('service finish');