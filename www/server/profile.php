<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, accept, content-type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");


$user = array(
    'id' => '20',
    'name' => 'John Doe',
    'phone' => '+91 458 9658 96',
    'email' => 'john@mail.com',
    'dob' => '2005-05-25',
    'gender' => 'male',
    'height' => '156 cm',
    'weight' => '50 kg',
    'language_known' => 'English',
    'eye_color' => 'Black',
    'hair_style' => 'Curly',
    'complexion' => 'Brown',
    'about_me' => 'Done sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus.',
    'school_level' => 'Nill',
    'college_level' => 'Nill',
    'work_level' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    
);

$return = array(
    'status' => 'valid',
    'user' => $user,
);


echo json_encode($return);