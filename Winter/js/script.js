function loadSection(id, category,json) {
	if (json!="none") {
		clearNodes(id);
		for(var i=0;i<json.length;i++){
			var title = document.createElement('h1');
			title.appendChild(document.createTextNode(json[i].title));
			document.getElementById(id).appendChild(title);
			var img = document.createElement('img');
			img.src = "img/"+category+"/"+json[i].imgName;
			img.width=json[i].imgW;
			img.height=json[i].imgH;
			document.getElementById(id).appendChild(img);
			if (json[i].creationDate!="none") {
				var date = document.createElement('h3');
				date.appendChild(document.createTextNode(json[i].creationDate));
				document.getElementById(id).appendChild(date);
			}
			if (json[i].medium!="none") {
				var medium =  document.createElement('h3');
				medium.appendChild(document.createTextNode("Medium Used: "+json[i].medium));
				document.getElementById(id).appendChild(medium);
			}
			if (json[i].desc!="none") {
				var desc =  document.createElement('h3');
				desc.appendChild(document.createTextNode(json[i].desc));
				document.getElementById(id).appendChild(desc);
			}
		}
	}
}
function clearNodes(id){
	while(document.getElementById(id).hasChildNodes()){
		document.getElementById(id).removeChild(document.getElementById(id).lastChild);
	}
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
function preloadImage(url){
	var img=new Image();
	img.src=url;
	return img;
}
function makeVis(id){
	var panels = document.getElementsByClassName("panel-body");
	for(var i=0;i<panels.length;i++){
		panels[i].style.display = "none"
	}
	document.getElementById(id).style.display = "block";
	document.getElementById(id+"_head").onclick=function(){makeInvis(id);};
}
function makeInvis(id){
	document.getElementById(id).style.display = "none";
	document.getElementById(id+"_head").onclick=function(){makeVis(id);};
}
function addLogModal(){
	var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('get', 'login_modal.html', true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) { 
			document.getElementById('inner').innerHTML = xhr.responseText;
		} 
	}
	xhr.send();
}
function createNav(pageName){
	var nav = document.createElement('div');
	nav.className="navbar navbar-primary";
	//nav.className="navbar navbar-inverse";
	var navContain = document.createElement('div'); 
	navContain.className = "container-fluid";
	
	var navHeader = document.createElement('div'); 
	navHeader.className = "navbar-header";
	
	var logo = document.createElement('button');
	logo.setAttribute('type','button');
	logo.setAttribute('data-toggle','modal');
	logo.setAttribute('data-target','#modal');
	//data-toggle="modal" data-target="#myModal">
	logo.className = "navbar-brand btn btn-primary btn-lg";
	logo.id = "logo";
	logo.appendChild(document.createTextNode("Winter Bornartist"));
	
	navHeader.appendChild(createNavButton());
	navHeader.appendChild(logo);
	
	var navBar = document.createElement('div');
	navBar.className="collapse navbar-collapse";
	navBar.id = "navBar"
	navBar.appendChild(createNavList(pageName));
	
	navContain.appendChild(navHeader);
	navContain.appendChild(navBar);
	
	nav.appendChild(navContain);
	
	document.getElementsByTagName('body')[0].appendChild(nav);
}
function createNavButton(){
	var navButton = document.createElement('button'); 
	navButton.className = "navbar-toggle collapsed btn btn-primary btn-lg"
	navButton.id = "navBtn"
	navButton.setAttribute('type','button');
	navButton.setAttribute('data-toggle','collapse');
	navButton.setAttribute('data-target','#navBar');
	navButton.setAttribute('aria-expanded','false');
	
	var sr = document.createElement('span');
	sr.className = "sr-only";
	sr.appendChild(document.createTextNode("Toggle navigation"));
	
	/*var iconBar1 = document.createElement('span');
	iconBar1.className = "icon-bar";
	var iconBar2 = document.createElement('span');
	iconBar2.className = "icon-bar";
	var iconBar3 = document.createElement('span');
	iconBar3.className = "icon-bar";*/
	
	navButton.appendChild(sr);
	/*navButton.appendChild(iconBar1);
	navButton.appendChild(iconBar2);
	navButton.appendChild(iconBar3);*/
	navButton.appendChild(document.createTextNode("Navigation"));
	navButton.onclick = function(){
		btnText("Navigation",navButton.id)
	}
	
	return navButton;
}
function btnText(currText,id) {
	if (currText=="Navigation") {
		clearNodes(id);
		document.getElementById(id).appendChild(document.createTextNode("Hide"));
		document.getElementById(id).onclick = function(){
			btnText("Hide",id)
		}
	}
	else if (currText=="Hide") {
		clearNodes(id);
		document.getElementById(id).appendChild(document.createTextNode("Navigation"));
		document.getElementById(id).onclick = function(){
			btnText("Navigation",id)
		}
	}
}
function createNavList(pageName){
	var navList = document.createElement('ul');
	navList.className = "nav navbar-nav";
	navList.id='navList';
	
	var liHome = document.createElement('li');
	var aHome = document.createElement('a');
	aHome.appendChild(document.createTextNode("Home"));
	aHome.href="index.html"
	if(pageName=="home"){
		liHome.className = "active";
		aHome.href = "#";
	}
	liHome.appendChild(aHome);
	
	var liArtwork = document.createElement('li');
	var aArtwork = document.createElement('a');
	aArtwork.appendChild(document.createTextNode("Artwork"));
	aArtwork.href="artwork.html"
	if(pageName=="artwork"){
		liArtwork.className = "active";
		aArtwork.href = "#";
	}
	liArtwork.appendChild(aArtwork);
	
	var liMakeup = document.createElement('li');
	var aMakeup = document.createElement('a');
	aMakeup.appendChild(document.createTextNode("Makeup"));
	aMakeup.href="makeup.html"
	if(pageName=="makeup"){
		liMakeup.className = "active";
		liMakeup.href = "#";
	}
	liMakeup.appendChild(aMakeup);
	
	var liPhotography = document.createElement('li');
	var aPhotography = document.createElement('a');
	aPhotography.appendChild(document.createTextNode("Photography"));
	aPhotography.href="photography.html"
	if(pageName=="photography"){
		liPhotography.className = "active";
		aPhotography.href = "#";
	}
	liPhotography.appendChild(aPhotography);
	
	var liTattoo = document.createElement('li');
	var aTattoo = document.createElement('a');
	aTattoo.appendChild(document.createTextNode("Tattoo Designs"));
	aTattoo.href="tattoo_desgins.html"
	if(pageName=="tattoo"){
		liTattoo.className = "active";
		aTattoo.href = "#";
	}
	liTattoo.appendChild(aTattoo);
	
	var liBlog = document.createElement('li');
	var aBlog = document.createElement('a');
	aBlog.appendChild(document.createTextNode("Blog"));
	aBlog.href="blog.html"
	if(pageName=="blog"){
		liBlog.className = "active";
		aBlog.href = "#";
	}
	liBlog.appendChild(aBlog);
	
	var liContact = document.createElement('li');
	var aContact = document.createElement('a');
	aContact.appendChild(document.createTextNode("Contact Me"));
	aContact.href="contact.html"
	if(pageName=="contact"){
		liContact.className = "active";
		aContact.href = "#";
	}
	liContact.appendChild(aContact);
	
	navList.appendChild(liHome);
	navList.appendChild(liArtwork);
	navList.appendChild(liMakeup);
	navList.appendChild(liPhotography);
	navList.appendChild(liTattoo);
	navList.appendChild(liBlog);
	navList.appendChild(liContact);
	
	return navList;
}