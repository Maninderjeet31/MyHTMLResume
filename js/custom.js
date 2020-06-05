/*Show and hide menu bar*/

$(document).ready(function() {
    
   'use strict';
    
    $(window).scroll(function(){
       'use strict';
        
        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(59,59,59, 0)'
            });
        }
        else{
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
            });
            
            
            $('.navbar-default').css({
                'background-color': 'rgba(59,59,59, 0.7)',
                'border-color': '#444'
            });
            
            $('.navbar-brand').css({
               'height': '35px',
                'padding-top': '0px'
            });
            
            $('.navbar-nav > li > a').css({
               'padding-top' : '15px' 
            });
        }        
        
    });
});

//Add smooth scrolling from external css-tricks.com/snippets/jquery

$(document).ready(function() {
   'use strict';
    
    $('.nav-item, #btn-exp, #scroll-to-top').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
          return false;
      }
    }
  });
});


/*  Active Menu item on click  */

$(document).ready(function() {
   'use strict'; 
    
    $('.navbar-nav li a').click(function() {
       
        'use strict';
        
        $('.navbar-nav li a').parent().removeClass("active");
        
        $(this).parent().addClass("active");
        
    });
    
});

/* Highlight Menu item on reaching their div*/
 $(document).ready(function() {
    'use strict';
     
     $(window).scroll(function() {
        'use strict';
         
         $("section").each(function() {
             
             'use strict';
             
             var bb = $(this).attr("id");   //returns CONTACT, DOWNLOAD, etc
             var hei = $(this).outerHeight();
             var grttop = $(this).offset().top - 70; //offset retrieves current position and then top position of current div in whch we wiil be at that moment.
             
             if($(window).scrollTop() > grttop && $(window).scrollTop() < (grttop + hei)) //$(window).scrollTop() returns vertical scroll bar position if greater than div's height
                 {
                     $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active"); // -> bb returns which section id we are on
                 }
             else{
                     $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
             }
             
         });
     });
     
 });

//Add auto padding to header wrt the screen size

$(document).ready(function() {
   'use strict';
    
    setInterval(function() {
        
        'use strict';
        
        var windowHeight = $(window).height();
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
           'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10)
});

//Add bx slider to screens

$(document).ready(function() {
    
   $('.bxslider').bxSlider({
    
       sliderWidth: 292.5,
       auto: true,
       minSlides: 1,
       maxSlides: 3,
       slideMargin: 50
   });
    
});

// Add counter css
$(document).ready(function() {
   $('.counter-num').counterUp({
    delay: 10,
    time: 2000
   }); 
});

// ==================== Animated Donut =====================

$(document).ready(function() {

        /**
         * ---------------------------------------
         * This demo was created using amCharts 4.
         * 
         * For more information visit:
         * https://www.amcharts.com/
         * 
         * Documentation is available at:
         * https://www.amcharts.com/docs/v4/
         * ---------------------------------------
         */

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.PieChart);

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "percent";
        pieSeries.dataFields.category = "language";

        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = am4core.percent(10);

        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
            {
            "property": "cursor",
            "value": "pointer"
            }
        ];

        pieSeries.alignLabels = false;
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.radius = 3;
        pieSeries.labels.template.padding(0,0,0,0);

        pieSeries.ticks.template.disabled = true;

        // Create a base filter effect (as if it's not there) for the hover to return to
        var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
        shadow.opacity = 0;

        // Create hover state
        var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        // Slightly shift the shadow and make it more prominent on hover
        var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;

        // Add a legend
        chart.legend = new am4charts.Legend();

        chart.data = [{
        "language": "HTML5",
        "percent": 90
        },{
        "language": "CSS3",
        "percent": 83
        }, {
        "language": "Javascript",
        "percent": 75
        }, {
        "language": "Jquery",
        "percent": 60
        }, {
        "language": "JAVA",
        "percent": 95
        }, {
        "language": "C/C++",
        "percent": 64
        }, {
        "language": "SQL",
        "percent": 80
        }, {
        "language": "Bootstrap",
        "percent": 65
        }, {
        "language": "SVG",
        "percent": 70
        }];
});

//======== Progress Bar =========

$(document).ready(function() {

    $('.html').rProgressbar({
        percentage: 90,
        fillBackgroundColor:'#0080FF',
        backgroundColor:'#EEEEEE',
        borderRadius:'0px',
        height:'10px',
        width:'100%'
    });

    $('.css').rProgressbar({
        percentage: 83,
        fillBackgroundColor: '#ed1c74',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
      });

      $('.javascript').rProgressbar({
        percentage: 75,
        fillBackgroundColor:'#40FF00',
        backgroundColor:'#EEEEEE',
        borderRadius:'0px',
        height:'10px',
        width:'100%'
    });

    $('.jquery').rProgressbar({
        percentage: 60,
        fillBackgroundColor: '#A769DB',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
      });

      $('.java').rProgressbar({
        percentage: 95,
        fillBackgroundColor:'#35A7F3',
        backgroundColor:'#EEEEEE',
        borderRadius:'0px',
        height:'10px',
        width:'100%'
    });

    $('.c').rProgressbar({
        percentage: 64,
        fillBackgroundColor: '#FEE83D',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
      });

      $('.sql').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#F68E27',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
      });
        
  
});

//Add timeline ========================






























