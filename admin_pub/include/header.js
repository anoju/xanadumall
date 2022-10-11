/**
* Header include
* ------------------
* 레이어 팝업 링크 주소에 \'  주의
*/
(function(){


var str='';
str+='<!-- 헤더영역 -->';
str+='<header id="header">';
str+='	<h1 id="logo"><a href="/">NEXTID</a></h1>';
str+='	<a href="#" class="btn_gnb">';
str+='		<i></i>';
str+='		<i></i>';
str+='		<i></i>';
str+='		<span class="blind">메뉴</span>';
str+='	</a>';
str+='	<div>';
str+='		<div class="gnb_menu">';
str+='			<a href="page0.html">홈</a>';
str+='			<a href="page_prod_dtl.html">회원관리</a>';
str+='			<a href="page_order_dtl.html">주문관리</a>';
str+='			<a href="page_category_ctl.html">카테고리관리</a>';
str+='			<a href="page_code_ctl.html">코드관리</a>';
str+='			<a href="page_holiday_ctl.html">휴일관리</a>';
str+='			<a href="page_holiday_test.html">휴일관리테스트</a>';
str+='			<a href="page_category_test.html">카테고리관리테스트</a>';
str+='			<a href="ORD_DETAIL_03.html">주문취소재승인팝업</a>';
str+='			<a href="#nolink">설정</a>';
str+='		</div>';
str+='		<div class="head_info">';
str+='			<span><strong>관리자</strong>님 안녕하세요.</span>';
str+='			<a href="#" class="button small">로그아웃</a>';
str+='		</div>';
str+='	</div>';
str+='	<script>';
str+='		$(function(){';
str+='			const active = $("#wrap").data("active");';
str+='			$(".gnb_menu > a").eq(active[0]).addClass("active");';
str+='		});';
str+='	</script>';
str+='</header>';
str+='<!--// 헤더영역 -->';

document.write(str);


})();
