var startBtn, nextBtnIntro, nextBtnName, backBtnSel, nextBtnSel, againBtn;
var cover, intro, yName, select, select01, select02, select03, select04, select05, loading;
var selBtn, selBtn1, selBtn2, selBtn3, selBtn4, selBtn5;
var nameValue; 
var randomName = [' 스파르타쿠스', ' 소녀', '제다이', '각하', '씨', '대령', ' 헐마이오니 그레인저', ' 마스터', ' 주니어', ' 옥타비아누스', ' 잡스', ' 디카프리오', '님',' 더 그레이스', 'ㅉㅉ', '쨩', '곤듀', '히메', '완쟈', '입닥쳐 ','개','우주폐기물 ','진격의 ','최강','영웅','시아','믹키','할미새 사촌 ','유노  넌 너무 멋져', '베이컨 토마토  디럭스 세트 5600원', '호모  에렉투스','안알랴줌ㅋ','화질구지네요'];
var randomJob = ['우주폐기물', '제국열차999 꼬리칸', '우주아이돌', '조연 덴마', '별자리 타이포그래퍼', '눈알 디자이너', '우주노예', '우주미아', '제독', '창조주','북악관 알바언니', '전업주부', '직업군인', '디멘터', '유치원 보조교사', '성직자', '희극인', '만능 엔터테이너', '불가촉천민', '패션 디자이너', '트위터리안', '양반', '10선비', '엄친아', '파티플래너', '간호조무사', '파워레인저 레드', '국선변호사', '인터넷 쇼핑몰 피팅모델', '파워블로거', '여자대통령', '지나가는 행인3', '웹툰작가', '댓글알바', '스타더스트(우주먼지)', '이중간첩', '여비서', '성형 코디네이터 실장님', '렛미인 지원자', '취준생', '소년소녀가장', '자연괴물', '성형괴물', '미대입시생', '시디과 학생', '좌의정', '카드캡터', '양갱', '우의정', '기획사 연습생', '스핑크스', '연금술사', '포켓몬 트레이너', '사신', '모태솔로', '게이바 바텐더', '아이유 로드매니저', '후쿠시마산 동태', '여류소설가'];
var randomGender = ['여장남자', '남장여자', '자웅동체', '번식가능', '번식불가', 'goza(무성)', 'XYZ염색체', 'EXO'];
var nation = ['천국','제5S공화국','미역국','약국','자취국 늦었을시 자구가구 튀김우동'];
var randomAge = Math.floor(Math.random()*100000);
var switchSel = false;
var test;
var sound;




var init = function() {
	startBtn = document.querySelector('#startBtn');
	nextBtnIntro = document.querySelector('#nextBtnIntro');
	nextBtnName = document.querySelector('#nextBtnName');
	nextBtnSel = document.querySelector('#nextBtnSel');
	backBtnSel = document.querySelector('#backBtnSel');
	againBtn = document.querySelector('#againBtn');

	cover = document.querySelector('#cover');
	intro = document.querySelector('#intro');
	yName = document.querySelector('#yName');
	select = document.querySelector('#select');
	select01 = document.querySelector('#select01');
	select02 = document.querySelector('#select02');
	select03 = document.querySelector('#select03');
	select04 = document.querySelector('#select04');
	select05 = document.querySelector('#select05');
	loading = document.querySelector('#loading');

	sound = document.querySelector('#sound');

	//커버에서 next버튼 클릭
	startBtn.onclick = function(){
		cover.style.left = '-100%';
		sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
	};
	
	//인트로에서 next버튼 클릭
	nextBtnIntro.onclick = function() {
		intro.style.left = '-100%';
		sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
	};
	
	//이름입력 페이지에서 next버튼 클릭
	nextBtnName.onclick = function() {
		//랜덤이름생성
		nameValue = document.formName.inputName.value;
		if( nameValue.length > 1 ){
			var i = Math.floor(Math.random()*randomName.length);
			if( 0 <= i && i <= 18 ){
				document.querySelector('#createdName').textContent = nameValue + randomName[i];	
			}else if( 19<= i && i<= 27 ){
				document.querySelector('#createdName').textContent = randomName[i] + nameValue;	
			}else if( i==28 ){
				document.querySelector('#createdName').textContent = '유노' + nameValue + ' 넌 너무 멋져' ;
			}else if( i==29 ){
				document.querySelector('#createdName').textContent = '베이컨 토마토 ' + nameValue + ' 디럭스 세트 5600원';	
			}else if( i==30 ){
				document.querySelector('#createdName').textContent = '호모' + nameValue + '에렉투스';	
			}else{
				document.querySelector('#createdName').textContent = randomName[i];	
			}
			
			yName.style.left = '-100%';
			sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
		}
		//랜덤직업생성
		var j = Math.floor(Math.random()*randomJob.length);
		document.querySelector('#createdJob').textContent = randomJob[j];
		//랜덤성별생성
		var k = Math.floor(Math.random()*randomGender.length);
		document.querySelector('#createdGender').textContent = randomGender[k]; 
		//랜덤나이생성
		document.querySelector('#createdAge').textContent = randomAge+'세';
	};

	//첫번째 선택페이지
	selBtn = function(i){
		document.imgHead_up.src = './images/result_head1_'+i+'.png';
		for(var j=1 ; j<6 ; j++){
			var selJ = document.querySelector('#selected0'+j);
			if(i==j){
				selJ.src = './images/bg_select.png';
				sound.innerHTML="<embed src=\"./sound/hai_received.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
			}else{
				selJ.src = './images/bg_select_t.png';
			}	
		}
		switchSel = true;
	};
	nextBtnSel.onclick = function() {
		if(switchSel){
			select.style.left = '-100%';
			sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
			switchSel = false;
		};	
	};
	backBtnSel.onclick = function() {
		yName.style.left = '0px';
		sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
	};

	//두번째 선택페이지
	selBtn1 = function(i){
		document.imgHead_under.src = './images/result_head2_'+i+'.png';
		for(var j=1 ; j<6 ; j++){
			var selJ = document.querySelector('#selected1'+j);
			if(i==j){
				selJ.src = './images/bg_select.png';
				sound.innerHTML="<embed src=\"./sound/hai_received.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
			}else{
				selJ.src = './images/bg_select_t.png';
			}	
		}
		switchSel = true;
	};
	nextBtnSel01.onclick = function() {
		if(switchSel){
			select01.style.left = '-100%';
			sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
			switchSel = false;
		};	
	};
	backBtnSel01.onclick = function() {
		select.style.left = '0px';
		sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
	};
	

	//세번째 선택페이지
	selBtn2 = function(i){
		document.imgMom.src = './images/result_body_'+i+'.png';
		for(var j=1 ; j<6 ; j++){
			var selJ = document.querySelector('#selected2'+j);
			if(i==j){
				selJ.src = './images/bg_select.png';
				sound.innerHTML="<embed src=\"./sound/hai_received.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
			}else{
				selJ.src = './images/bg_select_t.png';
			}	
		}
		switchSel = true;
	};
	nextBtnSel02.onclick = function() {
		if(switchSel){
			select02.style.left = '-100%';
			sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
			switchSel = false;
		};	
	};
	backBtnSel02.onclick = function() {
		select01.style.left = '0px';
		sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
	};

	//네번째 선택페이지
	selBtn3 = function(i){
		document.imgArm.src = './images/result_arm_'+i+'.png';
		for(var j=1 ; j<6 ; j++){
			var selJ = document.querySelector('#selected3'+j);
			if(i==j){
				selJ.src = './images/bg_select.png';
				sound.innerHTML="<embed src=\"./sound/hai_received.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
			}else{
				selJ.src = './images/bg_select_t.png';
			}	
		}
		switchSel = true;
	};
	nextBtnSel03.onclick = function() {
		if(switchSel){
			select03.style.left = '-100%';
			sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
			switchSel = false;
		};	
	};
	backBtnSel03.onclick = function() {
		select02.style.left = '0px';
		sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
	};

	//다섯번째 선택페이지
	selBtn4 = function(i){
		document.imgLeg.src = './images/result_leg_'+i+'.png';
		for(var j=1 ; j<6 ; j++){
			var selJ = document.querySelector('#selected4'+j);
			if(i==j){
				selJ.src = './images/bg_select.png';
				sound.innerHTML="<embed src=\"./sound/hai_received.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
			}else{
				selJ.src = './images/bg_select_t.png';
			}	
		}
		switchSel = true;
	};
	nextBtnSel04.onclick = function() {
		if(switchSel){
			select04.style.left = '-100%';
			sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
			switchSel = false;
		};	
	};
	backBtnSel04.onclick = function() {
		select03.style.left = '0px';
		sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
	};

	//마지막 선택페이지
	selBtn5 = function(i){
		for(var j=1 ; j<6 ; j++){
			var selJ = document.querySelector('#selected5'+j);
			if(i==j){
				selJ.src = './images/bg_select.png';
				document.imgBg.src = './images/result_bg_'+i+'.png';
				document.querySelector('#creatednation').textContent = nation[i-1];	
				sound.innerHTML="<embed src=\"./sound/hai_received.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
			}else{
				selJ.src = './images/bg_select_t.png';
			}	
		}
		switchSel = true;
	};
	nextBtnSel05.onclick = function() {
		if(switchSel){
			select05.style.left = '-100%';
			sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
			setTimeout( function(){
				loading.style.opacity = '0';
			}, 3000);
			setTimeout( function(){
				loading.style.display = 'none';
			}, 5000);
			switchSel = false;
		};	
	};
	backBtnSel05.onclick = function() {
		select04.style.left = '0px';
		sound.innerHTML="<embed src=\"./sound/hai_sent.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";	
	}; 

	//결과페이지에서 restart버튼 클릭
	againBtn.onclick = function() {
		test = 1;
		window.location.reload();
	};	
	
};

window.onload = function() {
	init();
};




