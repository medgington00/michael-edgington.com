const body = document.getElementById("body");

const firstHeaderP = document.getElementById("first-header-p");
const firstCommentP = document.getElementById("first-comment-p");

const pageOne = document.getElementById("page-one");
const pageTwo = document.getElementById("page-two");
const pageThree = document.getElementById("page-three");
const pageFour = document.getElementById("page-four");

const pageOneButton = document.getElementById("page-one-button");
const pageTwoButton = document.getElementById("page-two-button");
const pageThreeButton = document.getElementById("page-three-button");
const pageFourButton = document.getElementById("page-four-button");
const pageOneButtonUnderline = document.getElementById("nav-button-underline-one");
const pageTwoButtonUnderline = document.getElementById("nav-button-underline-two");
const pageThreeButtonUnderline = document.getElementById("nav-button-underline-three");
const pageFourButtonUnderline = document.getElementById("nav-button-underline-four");

currentPage = 1;

canScroll = true;



function OnLoad() {
	
	//Scroll to first Page
	SetNavButtonClass();
	pageOne.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"});
	
	// Typewriter Animation on Home Page
	firstHeaderDelay = 100;
	firstHeaderText = "Michael Edgington";
	TypewriterText(firstHeaderP, firstHeaderText, 0, firstHeaderDelay);
	
	setTimeout(() => {  TypewriterText(firstCommentP, "<!-- Freelance Web Developer -->", 0, 35); }, (firstHeaderDelay*firstHeaderText.length) + firstHeaderDelay);
	
	//Add event listeners for mouse scrolls
	window.addEventListener('wheel', function(event)
	{
	 if (event.deltaY < 0)
	 {
		if(canScroll)
			ScrollDirection(-1);
	 }
	 else if (event.deltaY > 0)
	 {
		if(canScroll)
			ScrollDirection(1);
	 }
	});
	
}

// Plays a typewriter animation on paragraph "p" to display text "t". Iterates on "i". "d" milliseconds between letters typed
//Should ALWAYS be passed initially with i = 0
function TypewriterText(p, t, i, d) {
	
	p.style.width = "max-content";
	
	if(i < t.length) {
		p.style.borderRight = "8px solid";
		p.innerText = t.substring(0,i+1);
		setTimeout(() => {  TypewriterText(p,t,i+1,d); }, d);
	} else {
		p.style.border = "none";
	}
}

//Scroll to previous or next page based on direction scrolled. 1 = up, -1 = down
function ScrollDirection(dir) {
	
	canScroll = false;
	setTimeout(() => {  canScroll = true; }, 500);
	
	currentPage += dir;
	
	if(currentPage == 1)
		pageOne.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	
	if(currentPage == 2)
		pageTwo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	
	if(currentPage == 3)
		pageThree.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	
	if(currentPage == 4)
		pageFour.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	
	
	if(currentPage < 1)
		currentPage = 1;
	if(currentPage > 4)
		currentPage = 4;
	
	SetNavButtonClass();
	
}

function ScrollTo(page) {
	if(currentPage!=page) {
		
		canScroll = false;
		setTimeout(() => {  canScroll = true; }, 250);
		
		currentPage = page;

		if(page==1)
			pageOne.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		
		if(page==2)
			pageTwo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		
		if(page==3)
			pageThree.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		
		if(page==4)
			pageFour.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		
	}
	
	SetNavButtonClass();
	
}

function SetNavButtonClass() {
	if(currentPage==1) {
		pageOneButton.classList.add("nav-button-selected");
		pageOneButtonUnderline.classList.add("nav-button-underline-selected");
		
		pageTwoButton.classList.remove("nav-button-selected");
		pageTwoButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageThreeButton.classList.remove("nav-button-selected");
		pageThreeButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageFourButton.classList.remove("nav-button-selected");
		pageFourButtonUnderline.classList.remove("nav-button-underline-selected");
	} else if(currentPage == 2) {
		pageOneButton.classList.remove("nav-button-selected");
		pageOneButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageTwoButton.classList.add("nav-button-selected");
		pageTwoButtonUnderline.classList.add("nav-button-underline-selected");
		
		pageThreeButton.classList.remove("nav-button-selected");
		pageThreeButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageFourButton.classList.remove("nav-button-selected");
		pageFourButtonUnderline.classList.remove("nav-button-underline-selected");
	} else if(currentPage == 3) {
		pageOneButton.classList.remove("nav-button-selected");
		pageOneButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageTwoButton.classList.remove("nav-button-selected");
		pageTwoButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageThreeButton.classList.add("nav-button-selected");
		pageThreeButtonUnderline.classList.add("nav-button-underline-selected");
		
		pageFourButton.classList.remove("nav-button-selected");
		pageFourButtonUnderline.classList.remove("nav-button-underline-selected");
	} else {
		pageOneButton.classList.remove("nav-button-selected");
		pageOneButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageTwoButton.classList.remove("nav-button-selected");
		pageTwoButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageThreeButton.classList.remove("nav-button-selected");
		pageThreeButtonUnderline.classList.remove("nav-button-underline-selected");
		
		pageFourButton.classList.add("nav-button-selected");
		pageFourButtonUnderline.classList.add("nav-button-underline-selected");
	}
}