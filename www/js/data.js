var global = {
    main: ['name', 'profile_pic', 'about_me'],
    profile_details_required_tie : ['phone', 'email'],
    profile_details_required: {
        phone: {label: "Phone"},
        email: {label: "Email"},
        dob: {label: "Date of birth"},
        gender: {label: "Gender"},
        height: {label: "Height"},
        weight: {label: "Weight"},
        lankuage_known: {label: "Lankuage known"},
        eye_color: {label: "Eye color"},
        hair_style: {label: "Hair style"},
        complexion: {label: "Complexion"},
        school: {label: "School"},
        college: {label: "College"},
        work: {label: "Work"}
    }
}

var dummy = {
    signup: {
        name: "John",
        phone: "+91 256 6363363",
        email: "john@mail.com",
        password: "sample123",
        confirm_password: "sample123",
    },
    profile: {
        id: '20',
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
        work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        status: 'valid',
    },
}


var deactive_appData = {
    global: global,
    dummy: dummy,
    baseUrl: 'http://auditionworldtv.com',
    ws_login_url: 'authenticate',
    ws_signup_url: 'signup',
}

var appData = {
    global: global,
    dummy: dummy,
    baseUrl: 'http://localhost/auditionworld',
    ws_login_url: 'www/server/authenticate.php',
    ws_signup_url: 'www/server/signup.php',
}


