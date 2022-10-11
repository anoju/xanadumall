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
str+='		<ul class="gnb_menu">';
str+='			<li>';
str+='				<a href="page0.html">홈</a>';
str+='			</li>';
str+='			<li>';
str+='				<span>상품관리</span>';
str+='				<ul class="subMenu">';
str+='					<li>';
str+='						<a href="">상품등록</a>';
str+='					</li>';
str+='					<li>';
str+='						<a href="">상품등록</a>';
str+='					</li>';
str+='					<li>';
str+='						<a href="">상품등록</a>';
str+='					</li>';
str+='					<li>';
str+='						<a href="">상품등록</a>';
str+='					</li>';
str+='					<li>';
str+='						<a href="">상품등록</a>';
str+='					</li>';
str+='				</ul>';
str+='			</li>';
str+='			<li>';
str+='				<span>주문관리</span>';
str+='				<ul class="subMenu">';
str+='					<li>';
str+='						<a href="">주문상세</a>';
str+='					</li>';
str+='					<li>';
str+='						<a href="">주문상세</a>';
str+='					</li>';
str+='					<li>';
str+='						<a href="">주문상세</a>';
str+='					</li>';
str+='					<li>';
str+='						<a href="">주문상세</a>';
str+='					</li>';
str+='					<li>';
str+='						<a href="">주문상세</a>';
str+='					</li>';
str+='				</ul>';
str+='			</li>';
str+='			<li>';
str+='				<a href="#nolink">카테고리관리</a>';
str+='			</li>';
str+='			<li>';
str+='				<a href="#nolink">업체관리</a>';
str+='			</li>';
str+='			<li>';
str+='				<a href="#nolink">고객센터&정산관리</a>';
str+='			</li>';
str+='		</ul>';
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
