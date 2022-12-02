
    fetch("./js/lifestyleposts.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data){
var div=document.getElementById("nav-brand");
div.innerHTML=data.navbrand;

var div1=document.getElementById("toggle-icons");
div1.innerHTML=data.toggleicons;

var div2=document.getElementById("nav-items");
div2.innerHTML=data.navitems;

var div3=document.getElementById("social");
div3.innerHTML=data.social;

var div4=document.getElementById("post1");
div4.innerHTML=data.post1;

var div5=document.getElementById("post2");
div5.innerHTML=data.post2;

var div6=document.getElementById("post3");
div6.innerHTML=data.post3;

var div7=document.getElementById("post4");
div7.innerHTML=data.post4;

var div8=document.getElementById("pagination");
div8.innerHTML=data.pagination;

var div9=document.getElementById("category");
div9.innerHTML=data.category;

var div10=document.getElementById("popular-post");
div10.innerHTML=data.popularpost;

var div11=document.getElementById("newsletter");
div11.innerHTML=data.newsletter;

var div12=document.getElementById("popular-tags");
div12.innerHTML=data.populartags;

var div13=document.getElementById("about-us");
div13.innerHTML=data.aboutus;

var div14=document.getElementById("footer-newsletter");
div14.innerHTML=data.footernewsletter;

var div15=document.getElementById("instagram");
div15.innerHTML=data.instagram;

var div16=document.getElementById("follow");
div16.innerHTML=data.follow;

var div16=document.getElementById("move-up");
div16.innerHTML=data.moveup;

var div17=document.getElementById("blogpage-title");
div17.innerHTML=data.blogpagetitle;
}
// var element=document.getElementById("post1");
// var Bhtml=element.outerHTML;
// var data={"post1":Bhtml};
// var json= JSON.stringify(data)
// // // var html=JSON.parse(json)
// console.log(json);
