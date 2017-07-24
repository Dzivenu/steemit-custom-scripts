// ==UserScript==
// @name          SteemIt.com FilterByReputation +ShowUnvotedOnly
// @description   Add Filter by Reputation to SteemIt
// @namespace     http://tampermonkey.net/
// @author        netuoso & eaposztrof
// @updateURL     https://github.com/eapo/steemit-custom-scripts/raw/master/FilterByReputation-ShowUnvotedOnly.user.js
// @downloadURL   https://github.com/eapo/steemit-custom-scripts/raw/master/FilterByReputation-ShowUnvotedOnly.user.js
// @supportURL    https://github.com/eapo/steemit-custom-scripts/issues?q=is%3Aissue+is%3Aopen+-label%3Abug
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://steemit.com/@eaposztrof
// @include       http://steemit.com/*
// @include       https://steemit.com/*
// @include       http://*.steemit.com/*
// @include       https://*.steemit.com/*
// @require       https://code.jquery.com/jquery-1.8.3.js
// @version      1.6.1
// ==/UserScript==

function hideVotedPosts() {
    // Get all posts votes count
    var elements = document.getElementsByClassName("VotesAndComments__votes");
    // Loop over the posts and hide the entire post if there are votes
    // 0 votes has title of "no votes"
    for (var i=0; i<elements.length; i++) {
        var votes = elements[i].getAttribute('title');
        if (votes !== "no votes") {
            console.log(votes);
            elements[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display="none";
        }
    }
}

function showVotedPosts() {
    // Get all posts
    var elements = document.getElementsByClassName("PostSummary");
    var footerElements = document.getElementsByClassName("PostSummary__footer");
    // Loop over the posts and unhide them
    for (var i=0; i<elements.length; i++) {
        elements[i].parentElement.style.display="list-item";
        footerElements[i].style.display = "list-item";
    }
}

function toggleAutoFilter(setting) {
    if (setting == "enable" ) {
        hideVotedPosts();
        document.getElementById("enableFilterLink").style.display = "none";
        document.getElementById("disableFilterLink").style.display = "inline-block";

        // Enable auto filtering
        document.getElementsByClassName("PostsList__summaries")[0].addEventListener("DOMNodeInserted", function(event) {
            hideVotedPosts();
        });
    } else {
        showVotedPosts();
        document.getElementById("disableFilterLink").style.display = "none";
        document.getElementById("enableFilterLink").style.display = "inline-block";

        // Disable auto filtering
        // Enable auto filtering
        document.getElementsByClassName("PostsList__summaries")[0].addEventListener("DOMNodeInserted", function(event) {
            showVotedPosts();
        });
    }
}

/*--- Note, gmMain () will fire under all these conditions:
    1) The page initially loads or does an HTML reload (F5, etc.).
    2) The scheme, host, or port change.  These all cause the browser to
       load a fresh page.
    3) AJAX changes the URL (even if it does not trigger a new HTML load).
*/
var fireOnHashChangesToo    = true;
var pageURLCheckTimer       = setInterval (
    function () {
        if ( this.lastPathStr  !== location.pathname || this.lastQueryStr !== location.search || (fireOnHashChangesToo && this.lastHashStr !== location.hash) ) {
            this.lastPathStr  = location.pathname;
            this.lastQueryStr = location.search;
            this.lastHashStr  = location.hash;
            gmMain ();
        }
    }, 111
);

function gmMain () {
    // Create a button called "Hide Voted Posts"
    var enableWrapper = document.createElement("li");
    enableWrapper.id = "enableFilterLink";
    enableWrapper.className = "votedScript";
    var enableLink = document.createElement("a");
    enableLink.innerHTML = "hide voted posts";
    enableLink.onclick = function() { toggleAutoFilter("enable"); };
    enableLink.style.pointer = "cursor";
    enableWrapper.appendChild(enableLink);

    // Create a button called "Show Voted Posts"
    var disableWrapper = document.createElement("li");
    disableWrapper.id = "disableFilterLink";
    disableWrapper.className = "votedScript";
    var disableLink = document.createElement("a");
    disableLink.innerHTML = "show voted posts";
    disableLink.onclick = function() { toggleAutoFilter("disable"); };
    disableLink.style.pointer = "cursor";
    disableWrapper.appendChild(disableLink);
    disableWrapper.style.display = "none";

    try {
        // Append the link to the navigation bar on the top of the screen
        if (window.location.href.match( /(feed|created)/ ) ) {
            if (document.getElementsByClassName("votedScript").length === 0) {
                // Append the link to the navigation bar on the top of the screen
                document.getElementsByClassName('Topics__title')[0].appendChild(enableWrapper);
                document.getElementsByClassName('Topics__title')[0].appendChild(disableWrapper);
            } else {
                document.getElementsByClassName("votedScript")[0].style.display = "inline-block";
            }
        } else {
            if (document.getElementsByClassName("votedScript").length > 0) {
                for (i=0;document.getElementsByClassName("votedScript").length;i++) {
                    document.getElementsByClassName("votedScript")[i].style.display = "none";
                }
            }
        }
    } catch (e) {}
}

function filterPosts(filterReputation) {
    // Get all posts vcards (author,rating,tag)
    var elements = document.getElementsByClassName("Reputation");

    for (var i=0; i<elements.length; i++) {
        if (filterReputation !== "" || filterReputation !== "0") {
            // Loop over the posts and hide the entire post if tag is different than filter
            // Aka, enable filter
            var authorReputation = Number(elements[i].innerText);
            if (authorReputation < filterReputation) {
                elements[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display="none";
            } else if (authorReputation > filterReputation) {
                elements[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display="list-item";
            }

        } else {
            // If filter is "" then ensure all posts are displayed
            // Aka, disable filter
            elements[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display="list-item";
        }
    }
}

function enablePostFilter() {
    // Get tag to filter from input field
    filterReputation = document.getElementById("reputationInput");
    filterPosts(filterReputation.value);

    // Automatically filter new posts as the page loads more
    document.getElementById("posts_list").addEventListener("DOMNodeInserted", function(event) {
        filterPosts(filterReputation.value);
    });
}

function disablePostFilter() {
    // Unhide previously hidden posts
    var renderedElements = document.getElementsByClassName("PostsList__summaries")[0].children;
    for (var i=0; i<renderedElements.length; i++) {
        renderedElements[i].style.display = "list-item";
    }
    // The footer somehow hides itself; unhide it
    var footerElements = document.getElementsByClassName("PostSummary__footer");
    for (var j=0; j<footerElements.length; j++) {
        footerElements[j].style.display = "list-item";
    }

    // Get tag to filter from input field
    filterReputation = document.getElementById("reputationInput");
    filterReputation.value = "0";
    filterReputation.innerText = "0";
    enablePostFilter("0");
}

function keypressChange(e) {
    if(e.keyCode == 13) {
        enablePostFilter();
    } else if(e.keyCode == 27 || e.keyCode == 40) {
        disablePostFilter();
        enablePostFilter();
    }
}
window.onload = function() {
    document.getElementById("reputationInput").focus();
};
// Input field for minimum reputation ShowUnvotedOnly on [Endter]
var reputationInput = document.createElement("input");
reputationInput.id = "reputationInput";
reputationInput.type = "number";
reputationInput.tabindex = "0";
reputationInput.onkeyup = function(e){filterReputation = document.getElementById("reputationInput");filterPosts(filterReputation.value);};
reputationInput.onkeypress = function(e){(e.keyCode==13)?toggleAutoFilter("enable"):console.log(e);};
reputationInput.onload = function(){document.getElementById("reputationInput").focus();};
reputationInput.placeholder = "filter by min rep";
reputationInput.style.display = "block";
reputationInput.style.width = "80%";
reputationInput.style.marginTop = "10px";

// Enable button field for minimum reputation
var reputationEnable = document.createElement("button");
reputationEnable.id = "reputationEnable";
reputationEnable.href = "javascript:;";
reputationEnable.type = "submit";
reputationEnable.className = "button";
reputationEnable.onClick = "enablePostFilter()";
enableSpan = document.createElement("span");
enableSpan.title = "enable reputation filter";
enableSpan.innerHTML = "ON";
reputationEnable.appendChild(enableSpan);

// Disable button field for minimum reputation
var reputationDisable = document.createElement("button");
reputationDisable.id = "reputationDisable";
reputationDisable.href = "javascript:;";
reputationDisable.type = "submit";
reputationDisable.className = "button";
reputationDisable.onClick = "disablePostFilter()";
disableSpan = document.createElement("span");
disableSpan.title = "disable reputation filter";
disableSpan.innerHTML = "OFF";
reputationDisable.appendChild(disableSpan);

// New container to hold the created buttons
reputationContainer = document.createElement("div");
reputationContainer.style.width = "100%";
reputationButtons = document.createElement("div");
reputationButtons.style.width = "90%";
reputationButtons.style.margin = "0 auto !important";
reputationButtons.appendChild(reputationDisable);
reputationButtons.appendChild(reputationEnable);
reputationContainer.appendChild(reputationButtons);

// Append the reputation container to the nav bar on the right side of the page
document.getElementsByClassName('Topics__title')[0].appendChild(reputationInput);
document.getElementsByClassName('Topics__title')[0].appendChild(reputationContainer);

// document.getElementById("reputationInput").addEventListener("change", enablePostFilter);
document.getElementById("reputationEnable").addEventListener("click", enablePostFilter);
document.getElementById("reputationDisable").addEventListener("click", disablePostFilter);
