//Box Show/Hide
var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
//Dimond Show up and disappears
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');
//Box Collapses and shows up
var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');


$btnShowHide.on('click', function(){
	$box.toggleClass('js-box-show-hide');
})

$btnMove.on('click',function(){
	$diamond.toggleClass('js-diamond');
})

$btnCollapseExpand.on('click',function(){
	$panel.toggleClass('js-panel');
})



