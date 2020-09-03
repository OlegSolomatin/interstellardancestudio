$(document).ready(function () {
	/*let script = document.createElement('SCRIPT');
	script.src = "https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b&callback=callbackFunc";
	document.getElementsByTagName("head")[0].appendChild(script);
	window.callbackFunc = function (result) {
		$('#vkontakte_count').text(result.response[0].members_count);
	}*/
		$.ajax({
			type: "POST",
			url: '../php/zapros.php',
			//data: formNm.serialize(),
			success: function (data) {
				// Вывод текста результата отправки
				$('#vkontakte_count').html(data);
				$('#vkontakte_count').text(data);
				console.log(data);
			},
			error: function (jqXHR, text, error) {
				// Вывод текста ошибки отправки
				$('#vkontakte_count').html(error);
				console.log(error);
			}
		});
});
