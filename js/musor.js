/*
* API
* */
/*$(document).on('click', '.person', function(){
            let script = document.createElement('SCRIPT');
            script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
            document.getElementsByTagName("head")[0].appendChild(script);
            window.callbackFunc = function (result) {
                interstellarMemberCount = result.response[0].members_count;
            };
        });*/
/*function zapros(){
		let script = document.createElement('SCRIPT');
		let MemberCount = 0;
		script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
		document.getElementsByTagName("head")[0].appendChild(script);
		window.callbackFunc = function (result) {
				MemberCount = result.response[0].members_count;
		};
		console.log(MemberCount);
}*/
/*let i = function () {
		let script = document.createElement('SCRIPT');
		script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
		document.getElementsByTagName("head")[0].appendChild(script);
		window.callbackFunc = function (result) {
				return i = result.response[0].members_count;
		}
		return i();
};*/
/*$(document).on('click', '.person', function (){
				let script = document.createElement('SCRIPT');
				script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
				document.getElementsByTagName("head")[0].appendChild(script);
				window.InterstellarCountMember
				window.callbackFunc = function (result) {
						MemberCount = result.response[0].members_count;
				};
		});*/
/*function zapros(Count) {
	 let CountM = Count;
	 let script = document.createElement('SCRIPT');
	 script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
	 document.getElementsByTagName("head")[0].appendChild(script);
			 window.callbackFunc = function (result) {
					 CountM = result.response[0].members_count;
					 console.log(CountM);
					 return CountM;
			 };
			 console.log('good');
			 return CountM;
			 console.log('lox');
};*/
/*function call(Count){
		let script = document.createElement('SCRIPT');
		script.src = "https://vk.com/js/api/openapi.js?168";
		script.onload = () => Count(script);
		document.head.append(script);
}
call(MemberCount =>{console.log('hello world')});*/
/*async function zapros(){
		let script = document.createElement('SCRIPT');
		let response = await window.callbackFunc;
		script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
		document.getElementsByTagName("head")[0].appendChild(script);
		window.callbackFunc = function (result) {
				response = result.response[0].members_count;
		};
		return response;
}*/
/*VK.Api.call('users.get', {user_ids: 210700286, fields: 'bdate'}, function(r) {
	 if(r.response) {
			 alert(r.response[0].bdate);
	 }
});*/
/*window.vkAsyncInit = function() {
		VK.init({
				apiId: 7576220
		});
};

setTimeout(function() {
		var el = document.createElement("script");
		el.type = "text/javascript";
		el.src = "https://vk.com/js/api/openapi.js?168";
		el.async = true;
		document.getElementById("vk_api_transport").appendChild(el);
}, 0);

VK.Api.call('groups.get', {user_ids: 85050907, v:"5.80"}, function(r) {
		if(r.response) {
				alert('Привет, ' + r.response[0].members_count);
		}
});*/
/* _this.find('.team-detail', function api_vk() {
            let script = document.createElement('SCRIPT');
            script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
            document.getElementsByTagName("head")[0].appendChild(script);
            window.callbackFunc = function (result) {
               interstellarMemberCount = result.response[0].members_count;
            }
        });*/
/*let vk_api = function () {
		let script = document.createElement('SCRIPT');
		script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
		document.getElementsByTagName("head")[0].appendChild(script);
		window.callbackFunc = function (result) {
				document.getElementById('vkontakte_count').innerText = result.response[0].members_count;
		}
};

vk_api();*/


/*Проверка CSS свойства блока team details*/
$(document).on('click', '.slide__bg-dark', function() {/*var activepersone = function () {
	if  ($('.team-detail').css('visibiliti') !== 'visible'){
		_this.find('.box-close-active').css({
			'display': 'block',
			'transition': '2s'
		});
	} else {
		_this.find('.box__close').css({
			'display': 'none'
		});
	}
};*/});

<!--Cookies modal window-->
/*(function(){
		//Change these values
		var msg = "Мы используем файлы cookie. Продолжив работу с сайтом, вы соглашаетесь с Политикой обработки персональных данных. ";
		var closeBtnMsg = "Согласен(а)";
		var privacyBtnMsg = "Узнать больше";
		var privacyLink = "documents/politicks.pdf";
		//check cookies
		if(document.cookie){
				var cookieString = document.cookie;
				var cookieList = cookieString.split(";");
				// if cookie named OKCookie is found, return
				for(x = 0; x < cookieList.length; x++){
						if (cookieList[x].indexOf("OKCookie") != -1){return};
				}
		}
		var docRoot = document.body;
		var okC = document.createElement("div");
		okC.setAttribute("id", "okCookie");
		var okCp = document.createElement("p");
		var okcText = document.createTextNode(msg);
		//close button
		var okCclose = document.createElement("a");
		var okcCloseText = document.createTextNode(closeBtnMsg);
		okCclose.setAttribute("href", "#");
		okCclose.setAttribute("id", "okClose");
		okCclose.appendChild(okcCloseText);
		okCclose.addEventListener("click", closeCookie, false);
		//privacy button
		var okCprivacy = document.createElement("a");
		var okcPrivacyText = document.createTextNode(privacyBtnMsg);
		okCprivacy.setAttribute("href", privacyLink);
		okCprivacy.setAttribute("target", "_blank");
		okCprivacy.setAttribute("id", "okCprivacy");
		okCprivacy.appendChild(okcPrivacyText);
		//add to DOM
		okCp.appendChild(okcText);
		okC.appendChild(okCp);
		okC.appendChild(okCclose);
		okC.appendChild(okCprivacy);
		docRoot.appendChild(okC);
		okC.classList.add("okcBeginAnimate");
		function closeCookie(){
				var cookieExpire = new Date();
				cookieExpire.setFullYear(cookieExpire.getFullYear() +2);
				document.cookie="OKCookie=1; expires=" + cookieExpire.toGMTString() + ";";
				docRoot.removeChild(okC);
		}
})();*/

<!-- Test -->
/*winWidth = $(window).width(),
	winHeight = $(window).height(),
	console.log(winHeight, winWidth);*/