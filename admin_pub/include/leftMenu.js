/**
* Header include
* ------------------
* 레이어 팝업 링크 주소에 \'  주의
*/
(function(){


var str='';
str+='<!-- LNB영역 -->';
str+='<aside class="left_menu">';
str+='<div class="menuBox">';
str+='	<nav class="gnb">';
str+='		<ul>';
str+='			<li><p class="tit">회원정보 관리</p>';
str+='				<div>';
str+='					<ul>';
str+='						<li><a href="page1_1_1.html">회원목록</a></li>';
str+='						<li><a href="page1_1_2.html">탈퇴 회원</a></li>';
str+='					</ul>';
str+='				</div>';
str+='			</li>';
str+='			<li><p class="tit">회원등급 관리</p>';
str+='				<div>';
str+='					<ul>';
str+='						<li><a href="page1_2_1.html">그룹관리</a></li>';
str+='						<li><a href="page1_2_2.html">기본등급관리</a></li>';
str+='					</ul>';
str+='				</div>';
str+='			</li>';
str+='			<li><p class="tit">푸쉬 관리</p>';
str+='				<div>';
str+='					<ul>';
str+='						<li><a href="page1_3_1.html">푸쉬 목록</a></li>';
str+='					</ul>';
str+='				</div>';
str+='			</li>';
str+='		</ul>';
str+='	</nav>';
str+='</div>';
str+='';
str+='</aside>';
str+='<!--// LNB영역 -->';

document.write(str);


})();
