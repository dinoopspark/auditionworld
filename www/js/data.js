var global = {
    // profile information
    user_profile: [
        {name: "name", label: "Name"},
        {name: "profile_pic", label: "Profile picture"},
        {name: "about_me", label: "About me", type: "textarea"},
        {name: "profile_details", type: "divider", label: "Profile Details"},
        {name: "phone", label: "Phone"},
        {name: "email", label: "Email", type: "email"},
        {name: "dob", label: "Date of birth"},
        {
            name: "gender", label: "Gender", type: "select",
            options: [
                {label: "Male", value: "male"},
                {label: "Female", value: "female"},
            ],
            option_default: "male"
        },
        {name: "language_known", label: "Language known"},
        {name: "physical_details", type: "divider", label: "Physical Details"},
        {name: "complexion", label: "Complexion"},
        {name: "eye_color", label: "Eye color"},
        {name: "height", label: "Height"},
        {name: "weight", label: "Weight"},
        {name: "hair", label: "Hair style"},
        {name: "experience_achievement", type: "divider", label: "Experience & Achievement"},
        {name: "school_level", label: "School", type: "textarea"},
        {name: "college_level", label: "College", type: "textarea"},
        {name: "work_level", label: "Work", type: "textarea"},
    ],
    profile_view_basic: [
        'name',
        'about_me',
        'profile_pic',
        'phone',
    ],
    profile_view: [
        'profile_details',
        'phone',
        'email',
        'dob',
        'gender',
        'language_known',
        'physical_details',
        'complexion',
        'eye_color',
        'height_feet',
        'weight',
        'hair',
        'experience_achievement',
        'school_level',
        'college_level',
        'work_level',
    ],
    profile_edit: [
        'name',
        'about_me',
        'profile_details',
        'phone',
        'dob',
        'gender',
        'language_known',
        'physical_details',
        'complexion',
        'eye_color',
        'height',
        'weight',
        'hair',
        'experience_achievement',
        'school_level',
        'college_level',
        'work_level',
    ],
}

var appData = {
    global: global,
    sample_profile_pic: 'img/avatar.png',
    baseUrl: 'http://auditionworldtv.com',
    url_login: 'app/authenticate',
    url_signup: 'app/register',
    url_profile: 'app/myprofile',
    
}

var deactive_appData = {
    global: global,
    sample_profile_pic: 'img/avatar.png',
    baseUrl: 'http://localhost/auditionworld/www/server',
    url_login: 'authenticate.php',
    url_signup: 'signup.php',
    url_profile: 'profile.php',
    
    url_profile_update: 'profile-edit.php',
    url_audition: 'auditions.php',
}


