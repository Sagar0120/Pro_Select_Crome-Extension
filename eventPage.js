// for Pronunciation
let menuItem1 = {
    "id": "Speak",
    "title": "Pronunciation",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem1);

chrome.contextMenus.onClicked.addListener(function(clickData){ 
    if (clickData.menuItemId == "Speak" && clickData.selectionText){        
       chrome.tts.speak(clickData.selectionText,
                        {
                            'rate': 0.5
                        });         
    }
});

// to translation

chrome.contextMenus.create({
    title: "Translation",
    id: "parentTra",
    contexts:["selection"]
  });

let menuItemTranslateG = {
    "id": "translateG",
    parentId: "parentTra",
    "title": "Gujarati",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItemTranslateG);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "translateG" && clickData.selectionText){    
        let convert = JSON.stringify(clickData.selectionText)
        let TranslateUrl = "https://translate.google.com/?sl=en&tl=gu&text=" + convert + "&op=translate";
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

let menuItemTranslateH = {
    "id": "translateH",
    parentId: "parentTra",
    "title": "Hindi",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItemTranslateH);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "translateH" && clickData.selectionText){    
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

// for wikipedia Page

let menuItem3 = {
    "id": "Wikit",
    "title": "Wikipedia Page",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem3);

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


// for youtube search


let menuItem4 = {
    "id": "youtube",
    "title": "YouTube Search",
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


// for Online course

chrome.contextMenus.create({
    title: "Online Courses",
    id: "parent",
    contexts:["selection"]
  });
  
// for coursera

let menuItemCourse1 = {
    "id": "coursera",
    parentId: "parent",
    "title": "Course on Coursera",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItemCourse1);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "coursera" && clickData.selectionText){    
        let convert = JSON.stringify(clickData.selectionText)
        let courseraUrl = "https://www.coursera.org/search?query=" + convert + "&skipBrowseRedirect=true";
        let createData = {
            "url": courseraUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});


// for Udemy

let menuItemCourse2 = {
    "id": "udemy",
    parentId: "parent",
    "title": "Course on Udemy",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItemCourse2);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "udemy" && clickData.selectionText){    
        let convert = JSON.stringify(clickData.selectionText)
        let UdemyUrl = "https://www.udemy.com/courses/search/?src=ukw&q=" + convert;
        let createData = {
            "url": UdemyUrl,
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
    "title": "Related Images",
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

/*chrome.browserAction.onClicked.addListener(function(clickData){
    let target = clickData.target;
    if(target.matches('.clickableBtn')){
        let gfg = clickData.document.getElementById("gfgkey").value;
        let convert = JSON.stringify(gfg);
        let gfgUrl =  "https://www.geeksforgeeks.org/" + convert + "/";
        let createData = {
            "url": gfgUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };
        chrome.windows.create(createData,function(){});
    }
    
});*/
