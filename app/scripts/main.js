//new WOW().init();
//$(function() {
   (function($) {

  'use strict';
   var winHeight = $(window).height();
   function scrollBegin(){
    window.scrollBy(0,662);
    console.log(winHeight);
}

setTimeout(function(){
   $('.wd').css('display','');
   $('.wd').fadeIn();
},8000);
$('.carousel').carousel();
$('.materialboxed').materialbox();

//window.sr = ScrollReveal();
//sr.reveal('#education');
   //var check = $(window).scrollTop() + " px";
 $('body').on('keydown', function(e){
     if (e.keyCode == 39){
     //console.log('test');
     $('.fp-next').css('border-color','transparent #000'),$('body').on('keyup', function(e){
        if (e.keyCode == 39){
           $('.fp-next').css('border-color','');
        }
     });
  }
  if(e.keyCode == 37){
     $('.fp-prev').css('border-color','transparent #000'),$('body').on('keyup', function(e){
        if (e.keyCode == 37){
           $('.fp-prev').css('border-color','');
        }
     });
 }
 });


 /*******************D3 Graph*********************/
  $('.bar').hide();
  $('#erase').click(function(){
     $('.bar').fadeOut(400);//.delay(1000).remove();
     $('#draw').removeClass('btnrotate-d');
     $(this).toggleClass('btnrotate-e');
 });
  $('#draw').click(function(){
     $(this).toggleClass('btnrotate-d');
     $('#erase').removeClass('btnrotate-e');
     $('.bar').fadeIn(4450);
     drawBars();
  });
    // function drawGraph(){
     var data = [
      {key: 'HTML', lvl: 9.5, skill: 'Expert'},
      {key: 'CSS', lvl: 8.5, skill: 'Pro'},
      {key: 'JavaScript', lvl: 6, skill: 'Now we\'re talking'},
      {key: 'jQuery', lvl: 5, skill: 'Not too shabby'},
      {key: 'PHP', lvl: 4, skill: 'Not bad'},
      {key: 'mySQL', lvl: 3, skill: 'Noobie'},
      {key: 'Node.js', lvl: 2, skill: 'Needs Work'},
      {key: 'Angular2', lvl:2, skill: 'Needs Work'},
      {key: 'd3', lvl: 1 , skill: 'meh'},
      {key: '', lvl: 0, skill: ''},
      {key: 'Premiere', lvl: 4, skill: 'Not bad'},
      {key: 'Illustrator', lvl: 5, skill: 'Now we\'re talking'},
      {key: 'Photoshop', lvl: 8, skill: 'Pro'}
    ];

    var margin = {top: 20, right: 30, bottom: 20, left: 30},
        width = 1000 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    //scale
    var maxData = d3.max(data, function(d) { return d.lvl;});
    var y = d3.scale.linear()
        .range([height, 0])
        .domain([0,10]);
        //.domain([0, d3.max(data, function(d) { return d.lvl;})]);
    var x = d3.scale.ordinal()
        .domain(data.map(function(d) {return d.key;}))
        .rangeBands([0, width]);
    var color = d3.scale.linear() //Gradient for Bars
    		.domain([0, maxData])
         .range(['#00e6d2','#00665e']);
         //.range(['#ef9a9a','#b71c1c']);
    		//.range(['#4da6ff','#003366']);
    var y_names = d3.scale.ordinal()
    		.domain([0,maxData])
    		.range([data.skill,data.skill])
    //Axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom')
        .ticks(20);
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left')
        .ticks(5);

    	 // Tip when hovered
    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-15, 0])
      .html(function(d) {
         return '<strong style=\'color:#000\'>Level</strong> <span style=\'color:#C05746\'>' + '&#9658; ' + d.skill + '</span>';
      })

    var chart = d3.select('.chart')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    chart.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis)
          .selectAll('text')
          .attr('y', 7)
          .attr('x', 7)
          .attr('dy', '.35em')
          .attr('transform', 'rotate(35)')
          .attr('font-size', '15px')
          .style('fill','#000')
          .style('text-anchor', 'start');

    chart.append('g')
        .attr('class', 'y axis')
        .style('fill','#000')
        .call(yAxis)
      .append('text')
        .attr('transform', 'rotate(270)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .attr('font-size', '15px')
        .style('text-anchor', 'end');
        //.text("Flaming");
    chart.call(tip)

function drawBars(){
    chart.selectAll('.bar')
        .data(data)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function(d) { return x(d.key); })
        .attr('y', function(d) { return y(d.lvl); })
        .attr('height', function(d) { return height - y(d.lvl); }).attr('width', x.rangeBand())
    	  .attr('width','80px')
    	  .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
    	 	.style('stroke','#000')
    		.style('stroke-width','2')
    		.style('opacity','0.9')
         .style('fill','none')
         //.style('fill', '#fcb052')
    		//.style('fill','#4e6096')
    		//.style("fill", function(d) { return color(d.val);})
    		.style('stroke-dasharray','1500')
    		.style('stroke-dashoffset','1600')
    		.style('animation','outline 5s linear')
    		.style('animation-fill-mode','forwards');

    		var t = d3.transition()
    				.duration(700)
    				.ease(d3.easeLinear);

    		 d3.selectAll('rect').transition(t)
    				.style('fill', function(d){ return color(d.lvl)})
    				.delay(3300)
    				.style('stroke','#000');
    }
//});


/*    Side Nav     */


  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');

  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: true,
    onLeave: function(index, nextIndex, direction) {

      /**
      * use the following condition:
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur
      * when you jump (using the dot navigation)
      * from the first section to another sections
      */

      // first animation
      //if( index == 1 && nextIndex == 2 ) {
      if( index == 1 && direction == 'down' ) {
         //alert("Going to section 2");
         $('#education').addClass('magictime spaceInUp');
        $isAnimatedSecond.addClass('animated fadeInUpBig');
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }
      if( index == 2 && direction == 'up'){
         $('#education').removeClass('magictime spaceInUp');
      }
    /**
      * use the following condition:
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur
      * when you jump (using the dot navigation) from the first section to the third one
      */

      // second animation
      if( index == 2 && direction == 'down'){
         $('#portfolio').addClass('magictime spaceInRight')
      // if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s');
        $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
        $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
      }
      if ( index == 1 && nextIndex == 3){
         $('#portfolio').addClass('magictime spaceInRight')
      }

     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur
      * when you jump (using the dot navigation)
      * from the first or second section to the fourth one
      */

      // third animation
      if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
        $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
        $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        });
      }
    }

  });

})(jQuery);
