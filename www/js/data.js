var global = {
    // Profile page information
    profile_details: [
        'language_known',
    ],
    physical_details: [
        'phone',
        'email',
        'dob',
        'gender',
        'height',
        'weight',
        'language_known',
        'eye_color',
        'hair_style',
        'complexion',
    ],
    experience_achievements: [
        'school',
        'college',
        'work',
    ],
    profile_edit: [
        'name',
        'phone',
        'email',
        'dob',
        'gender',
        'height',
        'weight',
        'language_known',
        'eye_color',
        'hair_style',
        'complexion',
    ],
    // profile information
    
    profile_fields: [
        {name: "name", label: "Name"},
        {name: "profile_pic", label: "Profile picture"},
        {name: "phone", label: "Phone"},
        {name: "email", label: "Email", type: "email"},
        {name: "dob", label: "Date of birth"},
        {name: "gender", label: "Gender"},
        {name: "height", label: "Height"},
        {name: "weight", label: "Weight"},
        {name: "language_known", label: "Language known"},
        {name: "eye_color", label: "Eye color"},
        {name: "hair_style", label: "Hair style"},
        {name: "complexion", label: "Complexion"},
        {name: "about_me", label: "About me"},
        {name: "school", label: "School"},
        {name: "college", label: "College"},
        {name: "work", label: "Work"}
    ],
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
        phone: '+91 458 9658 96',
        email: 'john@mail.com',
        dob: '2005-05-25',
        gender: 'Male',
        height: '156 cm',
        weight: '50 kg',
        language_known: 'English',
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


