console.log('\'Allo \'Allo!');
$(function() {
   new WOW().init();
  $('svg').hide();
$('button').click(function(){

  var data = [5, 4, 3, 2, 1, 0.5];

  var axisScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 400]);

  var maxData = d3.max(data);

  var width = 350,
    barHeight = 70;

  var x = d3.scaleLinear()
    .domain([0, maxData])
    .rangeRound([0, width]);

  var color = d3.scaleLinear() //Gradient for Bars
    .domain([0, maxData])
    .range(['#4da6ff', '#003366']);
  /*var stroke = d3.scale.linear()
      .domain([0, maxData])
      .range([]);*/

  var chart = d3.select('.graph')
    .append('svg')
    .attr('width', width)
    .attr('height', barHeight * data.length + 100)
    .style('margin-left', '30%')
    //.style('margin-bottom', '15%')
    //.style('margin-top','-100px')
    .style('transform', 'rotate(270deg)')
    .style('padding-bottom', '5%');
  //.style("border","1px solid black");

  var svgContainer = chart.select('svg')
    .append('g')
  if (svgContainer.empty())
    svgContainer = d3.select('svg')
    .append('g').classed('tools', true);

  var rect = svgContainer.selectAll('g')
    .data(data)
    .enter().append('rect')
    .attr('transform', function(d, i) {
      return 'translate(0,' + i * barHeight + ')';
    })
    .attr('width', x)
    .attr('height', barHeight - 5) //spacing between bars
    .style('stroke', 'black')
    .style('stroke-width', '2.5')
    .style('opacity', '0.9')
    .style('fill', '#4c5c68')
    //.style('fill', function(d) {  return color(d)})
    .style('stroke-dasharray', '1500')
    .style('stroke-dashoffset', '1600')
    .style('animation', 'outline 5s linear')
    .style('animation-fill-mode', 'forwards');

    var t = d3.transition()
          .duration(1000)
          .ease(d3.easeLinear);

    //var e = d3.ease("elastic-out-in", 1.2);

      d3.selectAll('rect').transition(t)
        .style('fill', function(d){ return color(d);})
        .delay(2970)
        .style('stroke','none');

    });
});


/*    Side Nav     */
    (function($) {

  'use strict';

  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');

  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: false,
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
      if( index == 1 && nextIndex == 2 ) {
        $isAnimatedSecond.addClass('animated fadeInUpBig');
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
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
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s');
        $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
        $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
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
      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
        $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
        $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        });
      }
    }

  });

})(jQuery);
