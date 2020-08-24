$(document).ready(function () {
		var baseUrL = 'https://api.vk.com/method/groups.getById?group_id=85050907&fields=members_count&v=5.80&access_token=1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b';
		fetch(baseUrL).then((response) => response.json()).then((res) => {
			if (res.error == 200) {
				console.log('lol');
				$('#vkontakte_count').text(res.data.response.members_count);
			}
		}).catch((error) => {
			console.log(error)
		})
});
