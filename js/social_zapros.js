$(document).ready(function () {
	let script = document.createElement('SCRIPT');
	//script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
	script.src = "https://api.vk.com/method/users.get?user_ids=54269&fields=counters&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
	document.getElementsByTagName("head")[0].appendChild(script);
	window.callbackFunc = function (result) {
		//document.getElementById('vkontakte_count').innerText = result.response[0].members_count;
		//const count = JSON.parse(result.response[0].members_count);
		//console.log(result.response[0].counters.followers);
		//$('#vkontakte_count').text(result.response[0].members_count);
		//const member = result.response[0].members_count;
		//$('#vkontakte_count').innerHTML = member.toString();
		//$('#vkontakte_count').text(member);
		//console.log(member.toString());
	}
});