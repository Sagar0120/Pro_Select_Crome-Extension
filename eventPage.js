let menuItem = {
    "id": "Speak",
    "title": "Speak",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){ 
    if (clickData.menuItemId == "Speak" && clickData.selectionText){        
       chrome.tts.speak(clickData.selectionText,
                        {
                            'rate': 0.7
                        });         
    }
});

// for wiki

let menuItem2 = {
    "id": "Wikit",
    "title": "Wikit",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem2);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

function fixedEncodeURIComponent (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Wikit" && clickData.selectionText){    
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});

// to translate

let menuItem3 = {
    "id": "translate",
    "title": "Translate",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem3);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "translate" && clickData.selectionText){    
        let convert = JSON.stringify(clickData.selectionText)
        var wikiUrl = "https://translate.google.com/?sl=en&tl=gu&text=" + convert + "&op=translate";
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});