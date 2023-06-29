// 1. Declare variables and capture input.
let familyName = prompt("Name of a family member.");
let campName = prompt("Location of a camp site.");
let adjectiveOne = prompt("Enter an adjective.");
let activityOne = prompt("Enter an activity.");
let activityTwo = prompt("Enter a different activity.");
let pluralNoun = prompt("Enter a plural noun.");
let adjectiveTwo = prompt("Enter an adjective.");
let noun = prompt("Enter a noun.");
let nickname = prompt("Enter your nickname.");


console.log(familyName);
console.log(campName);
console.log(adjectiveOne);
console.log(activityOne);
console.log(activityTwo);
console.log(pluralNoun);
console.log(adjectiveTwo);
console.log(noun);
console.log(nickname);

// 2. Combine the input with other words to create a story.
// 
// Dear <name of family member>, Here I am at Camp <name of camp>! I am having a <adjective> time.
// So far I have gone <activity> and <activity>. My favorite thing about campe is <plural noun>.
// They are so <adjective>! I miss <noun> though.
// See you soon! Love, <Nickname>

let story = `<p>Dear ${familyName}, 
Here I am at Camp ${campName}! 
I am having a ${adjectiveOne} time.
So far I have gone ${activityOne} and ${activityTwo}. 
My favorite thing about camp is ${pluralNoun}.
They are so ${adjectiveTwo}! I miss ${noun} though.
See you soon! 
Love, ${nickname}</p>`;

console.log(story);


// 3. Display the story as a <p> inside the <main> element.

document.querySelector('main').innerHTML = story;
