const typewriter = (param) => {
    let el = document.querySelector(param.el);
    let speed = param.speed;
    let result = param.string.split("");
    result.forEach((char, index) => {
        setTimeout(() => {
            char = char.replace(/\n/g, '<br>');
            el.innerHTML += char;
        }, speed * index);
    });
};

typewriter({
    el: "#typewriter",
    string: "With the power of technology\nEnriching society", 
    speed: 100
});

var top_bk = $( ".top_bk" ).width();
var shadow = $( ".shadow" ).width();
$(".top_bk").css("height",top_bk);
$(".shadow").css("height",shadow);


if (window.matchMedia && window.matchMedia('(min-device-width: 650px)').matches) {
    $.scrollify({
        section : ".box",
        scrollbars:"false",
        interstitialSection : "#header,#footer",
        easing: "swing",
        scrollSpeed: 300,
        
        before:function(i,panels) {
        var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".box").each(function(i) {
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
        activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";
        
        $("#box1").append(pagination);
        $(".pagination a").on("click",$.scrollify.move);
        }
        
    });
}

var beforePos = 0;

function ScrollAnime() {
    var elemTop = $('#point').offset().top;
	var scroll = $(window).scrollTop();
    if(scroll == beforePos) {
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		$('#header').removeClass('UpMove');	
		$('#header').addClass('DownMove');
    }else {
        $('#header').removeClass('DownMove');
		$('#header').addClass('UpMove');
    }
    
    beforePos = scroll;
}

$(window).scroll(function () {
	ScrollAnime();
});

$(window).on('load', function () {
	ScrollAnime();
});

    var headerH = $("#header").outerHeight(true);
    $('#g-navi li a').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top-headerH;
	$('body,html').animate({scrollTop: pos}, 1000);
	return false;
});
