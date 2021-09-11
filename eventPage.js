// for speak
let menuItem1 = {
    "id": "Speak",
    "title": "Speak",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem1);

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

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Wikit" && clickData.selectionText){    
        let wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        let createData = {
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
        let TranslateUrl = "https://translate.google.com/?sl=en&tl=hi&text=" + convert + "&op=translate";
        let createData = {
            "url": TranslateUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});

// for youtube search


let menuItem4 = {
    "id": "youtube",
    "title": "Youtube",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem4);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "youtube" && clickData.selectionText){    
        let convert = JSON.stringify(clickData.selectionText)
        let YoutubeUrl = "https://www.youtube.com/results?search_query=" + convert;
        let createData = {
            "url": YoutubeUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});

// for images

let menuItem5 = {
    "id": "images",
    "title": "Google Images",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem5);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "images" && clickData.selectionText){    
        let convert = JSON.stringify(clickData.selectionText)
        let ImageUrl = "https://www.google.com/search?q=" + convert + "+images&source=lnms&tbm=isch&sa=X&sqi=2&ved=1536&bih=722";
        let createData = {
            "url": ImageUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});