<?php
$user_id = 85050907;
$request_params = array(
'group_id' => $user_id,
'fields' => 'members_count',
'v' => '5.80',
'access_token' => '1a90f1471a90f1471a90f147e41ae36bdb11a901a90f14745d39452ab0babaf258a286b'
);
$get_params = http_build_query($request_params);
$result = json_decode(file_get_contents('https://api.vk.com/method/groups.getById?'. $get_params));
echo ($result -> response[0] -> members_count);
?>