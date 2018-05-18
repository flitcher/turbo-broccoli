// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


console.log('background running!!!');

chrome.runtime.onMessage.addListener(receiver)

window.word = "empty";

function receiver(message, sender, sendResponse) {
	console.log(message);
	if(message.text != "") {
		window.word = message.text;
		console.log('the selected word is = ' + message.text);
	}
	
}
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log(tab);
}
