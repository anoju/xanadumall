/*
    2014.06 ~
    author :  an.hyo-ju ( anoju@cntt.co.kr ) in CNTT
*/

$(function(){ 
	headActive();
	formStyle();
	layerpopup();
	tapMotion();
	topBtn();
	etcCtrl();

	include();

	//placeholder
	$(":input[placeholder]").placeholder();

	$('a[href=#none]').click(function(){
		return false;
	});

	
});


function include(){
	$(window).load(function(){
		var $include = $('[data-include]');
		$include.each(function(i,el){
			var $this = $(this)
			var src = $this.data('include');
			$this.load(src,function(){
				$this.removeAttr('data-include');
			});
		});
	});
}


/*head*/
function headActive(){
	//gnb
	var gnbTxt = $('#gnb a');
	var current = $('#page_tit').text();

	// gnb active
	gnbTxt.each(function() {
		 if ( $(this).text() == current) {
			$(this).parents('li').addClass('active');
		}
	});

	$('.btn_gnb').click(function(){
		if($('.left_menu').hasClass('active')){
			$('.left_menu').removeClass('active');
		}else{
			$('.left_menu').addClass('active');
		}
		return false;
	});

	$(window).resize(function(){
		$('.left_menu').removeClass('active');
	});
}

/*폼요소*/
function formStyle(){
	//checkbox, radio
	$('label .checkbox, label .radio').focus(function(){
		$(this).parent().addClass('hover');
	}).blur(function(){
		$(this).parent().removeClass('hover');
	});

	//spinner
	if($('.spinner').size() > 0){
		$( '.spinner' ).spinner({
			min: 1,
			max: 9,
			create: function( event, ui ) {
				//add custom classes and icons
				$(this)
				.next().html('<i class="icon icon-plus">더하기</i>')
				.next().html('<i class="icon icon-minus">빼기</i>')
			}
		});
	}

	//inputFile
	$('.input_file > input').click(function(){
		$('.btn_file input').trigger('click');
	});
	$('.input_file > input').focus(function(){
		$('.btn_file input').trigger('click');
	});	
	$('.btn_file .btn').click(function(e){
		e.preventDefault();
		$('.btn_file input').trigger('click');
	});	
	$('.btn_file input').change(function(){
		$('.input_file > input').val($(this).val());
	});

	if($('.datepicker').size() > 0){
		$( '.datepicker' ).datepicker({
			closeText: '닫기',
			prevText: '이전달',
			nextText: '다음달',
			currentText: '오늘',
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			dateFormat: 'yy.mm.dd',
			showMonthAfterYear: true,
			showOn: 'button',
			buttonText: '기간조회'
		});
	}

	// th 체크박스 기능
	$('.table thead th input:checkbox').on('click' , function(){
		var that = this;
		$(this).closest('table').find('tr > th:first-child input:checkbox').each(function(){
			this.checked = that.checked;			
		});
	});
}


/* TOP 버튼 */
function topBtn() {
    var settings = {
            button      : '#toTop',
            text        : '컨텐츠 상단으로 이동',
            min         : 100,
            fadeIn      : 400,
            fadeOut     : 400,
            scrollSpeed : 800,
            easingType  : 'easeInOutExpo'
        },
        oldiOS     = false,
        oldAndroid = false;

    if( /(iPhone|iPod|iPad)\sOS\s[0-4][_\d]+/i.test(navigator.userAgent) ) { oldiOS = true; }
    if( /Android\s+([0-2][\.\d]+)/i.test(navigator.userAgent) ) { oldAndroid = true; }
    $('body').append('<a href="#" id="' + settings.button.substring(1) + '" title="' + settings.text + '">' + settings.text + '</a>');
    $( settings.button ).on('click', function( e ){
        $('html, body').animate({ scrollTop : 0 }, settings.scrollSpeed, settings.easingType );
        e.preventDefault();
    })
    .on('mouseenter', function() {
        $( settings.button ).addClass('hover');
    })
    .on('mouseleave', function() {
        $( settings.button ).removeClass('hover');
    });

    $(window).scroll(function() {
        var position = $(window).scrollTop();
        if( oldiOS || oldAndroid ) {
            $( settings.button ).css({
                'position' : 'absolute',
                'top'      : position + $(window).height()
            });
        }
        if ( position > settings.min ) { $( settings.button ).fadeIn( settings.fadeIn );  }
        else { $( settings.button ).fadeOut( settings.fadeOut );  }
    });
}

/* Tap */
function tapMotion(){	
	$('.tabMotion a').click(function() {
		var href = $(this).attr('href');		
		$(href).show().siblings('.tab_cont').hide();
		$(this).parent().addClass('on').siblings().removeClass('on');
		return false;
    });

	if($('.tabMotion').size() > 0){
		$('.tabMotion').each(function() {
			$(this).children('li').eq(0).children('a').trigger('click');
		});
	}

	$(".tabScrollMotion li").click(function(e) {
		var idx = $(this).index()+1;
		var scTop = $("#tabCon" + idx).offset().top - 110;

		$(this).addClass('on').siblings().removeClass('on');

		$('html, body').animate({ scrollTop : scTop }, 800, 'easeInOutExpo' );
        e.preventDefault();
	});
}

/* 레이어 팝업 */
function layerpopup(id){

	if(id == null || id == "") {
		$(document).on('click','.layerPopOpen',function(){
			if(!$(this).hasClass('disabled')){
				var href = $(this).attr('href');
				if(!href){
					href = $(this).data('href');
				}
				layerPopOpen(href,$(this));
			}
			return false;
		});
	} else {
		if(!$("#"+id).hasClass('disabled')){
			layerPopOpen("#"+id, $("#"+id));
		}
	}
}

function layerPopOpen(target,change){
	var cont = $(target).find('.pop_cont');
	$(target).addClass('on');
	$('body').addClass('scrollLock');
	
	layerPopClose(change);
}

function layerPopClose(target){
	$(document).on('click','.pop_close',function(){
		$(this).closest('.pop_layer').removeClass('on');
		$('body').removeClass('scrollLock');
		
		if(target !== undefined)target.focus();
		
		return false;
	});

	$(document).on('click','.pop_layer',function(e){
		if($(e.originalEvent.target).hasClass('pop_layer')){
			// $('.pop_layer').removeClass('on');
			$(this).removeClass('on');
			$('body').removeClass('scrollLock');
			if(target !== undefined)target.focus();
		}
	});
}

function etcCtrl(){	
	//faq
	$('.faq_list li p a').click(function() {
		$(this).parent().next('div').slideToggle(300).parent().toggleClass('on').siblings('li').removeClass('on').children('div').slideUp(300);
		return false;
	});

	//table hover
	$('.tbl_hover tbody th, .tbl_hover tbody td').hover(function() {
		$(this).parent('tr').addClass('hover').siblings('tr').removeClass('hover');
	},function(){
		$('.tbl_hover tr').removeClass('hover')
	});

	//인쇄
	$('.btn_print').click(function() {
		window.print();
		return false;
	});
}


	

