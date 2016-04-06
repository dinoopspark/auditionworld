var global = {
    sample_profile: {
        id: '20',
        username: 'john',
        name: 'John Doe',
        profile_pic: 'http://example.com/images/user.png',
        dob: '2005-05-25',
        gender: 'Male',
        weight: '50 kg',
        height: '156 cm',
        email: 'john@mail.com',
        phone: '+91 458 9658 96',
        lankuage_known: 'English',
        eye_color: 'Black',
        hair_style: 'Curly',
        complexion: 'Brown',
        about_me: 'Done sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus.',
        school: 'Nill',
        college: 'Nill',
        work: 'Nill',
        status: 'valid',
    },
    main: ['name', 'profile_pic', 'about_me'],
    basic: [
        'email',
        'phone',
        'dob',
        'gender',
        'weight',
        'height',
        'lankuage_known',
        'eye_color',
        'hair_style',
        'complexion',
        'school',
        'college',
        'work',
    ]
}

var appData = {
    global: global,
    baseUrl: 'http://auditionworldtv.com',
    ws_login_url: 'authenticate',
}

var deactive_appData = {
    global: global,
    baseUrl: 'http://localhost/auditionworld',
    ws_login_url: 'www/server/authenticate.php',
}
