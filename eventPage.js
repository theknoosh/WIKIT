var contextMenuItem = {
    "id": "wikit",
    "title": "Wikit",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

function fixedEncodeURI (str){
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "wikit" && clickData.selectionText){
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        // alert(wikiUrl);
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": parseInt(screen.availHeight/4),
            "left": parseInt(screen.availWidth/4),
            "width": parseInt(screen.availWidth/2),
            "height": parseInt(screen.availHeight/2)
        };
        chrome.windows.create(createData, function(){});
    }
});