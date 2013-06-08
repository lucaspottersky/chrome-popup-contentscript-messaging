  console.log("the background");

  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) { 
    console.log("message received!", request);
    document.body.style.backgroundColor = request.color;
    sendResponse({farewell: "goodbye"});
  });

  // chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  //   if (request.method == "getList")
  //       sendResponse({status: localStorage['list']});
  //   else
  //       sendResponse({}); // snub them.
  // });
