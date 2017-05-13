var is_on=false;
var menu_on = function(){ $("#nav").toggle("blind",{direction:"vertical"});is_on=true;};
var menu_off = function(){ $("#nav").toggle("blind",{direction:"vertical"});is_on=false;};
var menu_toggle = function(){ if(is_on){menu_off();}else{menu_on();} };

$(function() {
$( ".accordions" ).accordion({
heightStyle: "content",
collapsible: true,

active: false,

/*icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },*/
});
});


  



/*
$( "#main-container-puavo").show();
$( "#main-container-services").show();
*/

 /* { opacity:0.5,default_width: 80%,
			default_height: 80% } */
/*
$(document).ready(function(){ $("a[rel^='prettyPhoto']").prettyPhoto( ); });
*/

$(document).ready(function() {

  $(function() {
    $( "#dialog" ).dialog({
        height: 600,
        width: 800,
        modal: true,
        autoOpen: false }
      );
  });

//$( "#opener" ).click(function() {
//  $( "#dialog" ).dialog( "open" );
//});

 

  $('#nav2').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 1550,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
  });

/****************************************************************************************/
 
  $(document).scroll(function() {
  
      var y = +0-($(window).scrollTop() / 20);

      $('#bg').css("top",y+"px");
      
  });

/*************************************************************************************/
});

$('#foo').each(function(i) {
	var variable = ($(this).text());
	variable = variable.replace(/ \[bar\] /gi, '.');
	variable = variable.replace(/ \[dash\] /gi, '-');
	variable = variable.replace(' [foo] ', '@');
                               
	//var result = '<a href="mailto:'+variable+'">'+variable+'</a>';
        var result= '<a href="mailto:amxa%20consulting%20%3C'+variable+'%3E?subject=Puavo">'+variable+'</a>';
	$(this).html(result);
});

$('#bar').each(function(i) {
	var variable = ($(this).text());
	
        var result= '<a href="tel:0'+variable+'">+41'+variable+'</a>';
	$(this).html(result);
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

/*
function scrollto(element){
$("body").animate({ scrollTop: ($(element).offset().top – 100)}, "slow");
};
*/

function scrollto(){
$("html,body").animate({ scrollTop: 1}, "slow");
};


scrollto();



/*
$('html').animate({
                        scrollTop: $("#scroll_top").offset().top
                    }, 10);
*/

//$('body').css("top","100px");

//var language=getUrlVars()["lang"];
/*alert(language);*/
