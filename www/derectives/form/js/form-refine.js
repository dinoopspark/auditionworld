app.controller("sampleCtrl", function ($scope, FormGenerator) {

    var sample_fields = [
        {name: "information", type: "divider", label: "Information"},
        {name: "name", label: "Name"},
        {name: "id", type: "url"},
        {name: "email", label: "Email", type: "email"},
        {name: "about", label: "About Me", type: "textarea"},
        {type: "divider", label: "Basic"},
        {
            name: "gender", label: "Gender", type: "radio",
            options: [
                {label: "Male", value: "male"},
                {label: "Female", value: "female"},
            ],
            option_default: "male"
        },
        {name: "hobbies", label: "Hobbies", type: "checkbox",
            options: [
                {label: "Reading", value: "reading"},
                {label: "Writing", value: "writing"},
                {label: "Swimming", value: "swimming"},
            ],
            option_default: ["reading", "swimming"],
        },
    ];


    $scope.sample_field_value = {
        name: "Sam",
        about: "lorem ipsum",
        gender: "male",
        id: "25",
    };

    var required_fields = ['id', 'information', 'hobbies'];

    $scope.sample_refine = FormGenerator.refine_field_attributes(sample_fields, $scope.sample_field_value);
    

    $scope.sample_refine = FormGenerator.filter_fields($scope.sample_refine, required_fields);
    $scope.sample_refined_value = $scope.sample_refine.form_values;
    console.log($scope.sample_refined_value);



    $scope.update = function (element_id) {
        var data = angular.element('#' + element_id).serializeObject();
        console.log(data);
    };


    //console.log($scope.sample_refine);

    $scope.isTextLike = function (type) {
        return FormGenerator.isTextLike(type)
    };

    $scope.update_02 = function (dec) {
        console.log(dec);
    }

});




app.factory("FormGenerator", function () {

    var fact = {};

    fact.type_allow = [
        "text",
        "select",
        "radio",
        "checkbox",
        "password",
        "email",
        "number",
        "url",
        "hidden",
        "divider"
    ];

    fact.isTextLike = function (type) {
        var fields = ["text", "password", "email", "number", "url", "hidden"];
        var result = fields.indexOf(type);
        return (result < 0) ? false : true;
    }

    // refine field attributes
    fact.refine_field_attributes = function (fields, valueObj) {

        var refine = {};

        var vs = {};

        angular.forEach(fields, function (value, key) {

            var type = (value.type) ? value.type : "text";

            var field_value = (valueObj[value.name]) ? valueObj[value.name] : "";
            var field_label = (value.label) ? value.label : "";
            var field_name = (value.name) ? value.name : "randname" + Math.floor((Math.random() * 100000) + 1);

            var new_data = {
                name: field_name,
                label: field_label,
                value: field_value,
                type: type
            };

            if (type == 'divider') {
                delete new_data.value;
            }

            if (type == 'select') {

                new_data.options = value.options;

                if (typeof valueObj[value.name] == 'undefined') {
                    new_data.value = (value.option_default) ? value.option_default : "";
                } else {
                    new_data.value = (valueObj[value.name] == "") ? "" : valueObj[value.name];
                }

                if (!value.option_default) {
                    new_data.options.unshift({label: " - ", value: ""});
                }

            }

            if (type == 'radio') {
                new_data.options = value.options;

                if (typeof valueObj[value.name] == 'undefined') {
                    new_data.value = (value.option_default) ? value.option_default : "";
                } else {
                    new_data.value = (valueObj[value.name] == "") ? "" : valueObj[value.name];
                }

            }

            if (type == 'checkbox') {
                new_data.options = value.options;

                if (typeof valueObj[value.name] == 'undefined') {
                    new_data.value = (value.option_default) ? value.option_default : [];
                } else {
                    new_data.value = (valueObj[value.name] == []) ? [] : valueObj[value.name];
                }
            }


            // value separated
            if(typeof new_data.value != "undefined"){
                vs[value.name] = new_data.value
            }
            

            refine[field_name] = new_data;

        });

        refine.form_values = vs;
        
        return refine;
    }

    // set required fields in order
    fact.filter_fields = function (refined_fields, required) {
        var structured = {};
        var vs = {};
        angular.forEach(required, function (value, key) {

            if (typeof refined_fields[value] != 'undefined') {
                var field = refined_fields[value];
                structured[field.name] = field;
                
                if(typeof refined_fields.form_values[value] != 'undefined'){
                    vs[field.name] = field.value;
                }
                
                
            }


        });
        structured.form_values = vs;
        return structured;
    }

    return fact;

});


app.directive("formRefine", function ($ionicModal) {

    return {
        restrict: 'E',
        templateUrl: 'derectives/form/templates/derective-form.html',
        scope: {
            // form fields and attributes
            items: '=',
            // form field values
            dec: '='
        },
        link: function (scope, element, attrs) {

            scope.isTextLike = function (type) {
                var fields = ["text", "password", "email", "number", "url", "hidden"];
                var result = fields.indexOf(type);
                return (result < 0) ? false : true;
            }


        }

    };

});



app.directive("formRadio", function ($ionicModal) {

    return {
        restrict: 'E',
        templateUrl: 'derectives/form/templates/derective-form-radio.html',
        scope: {
            // the list of radio items
            radiolist: '=',
            // form field values
            sec: '=',
        },
        link: function (scope, element, attrs) {

            $ionicModal.fromTemplateUrl('derectives/form/templates/model-form-radio-items.html', {
                scope: scope,
            }).then(function (modal) {
                scope.modal = modal;
            });

            scope.showItems = function () {
                scope.modal.show();
            }

            scope.hideItems = function (checked) {
                scope.sec[scope.radiolist.name] = checked;
                scope.modal.hide();
            }

        }

    };

});


app.directive("formCheckbox", function ($ionicModal) {

    return {
        restrict: 'E',
        templateUrl: 'derectives/form/templates/derective-form-checkbox.html',
        scope: {
            // the list of checkbox items
            checkboxlist: '=',
            // form field values
            sec: '=',
        },
        link: function (scope, element, attrs) {



            $ionicModal.fromTemplateUrl('derectives/form/templates/model-form-checkbox-items.html', {
                scope: scope,
            }).then(function (modal) {
                scope.modal = modal;
            });

            scope.showItems = function () {
                scope.modal.show();
            }

            scope.hideItems = function (checked) {
                scope.modal.hide();
            }

            scope.isChecked = function (value) {

                if (scope.sec[scope.checkboxlist.name].indexOf(value) >= 0) {
                    return true;
                } else {
                    //not found
                    return false;
                }

            }

            scope.storeItems = function (value) {
                if (scope.isChecked(value)) {
                    scope.sec[scope.checkboxlist.name].remove(value);
                } else {
                    scope.sec[scope.checkboxlist.name].push(value);
                }
            }

        }

    };

});


app.directive("formlistItems", function ($ionicModal, FormGenerator) {

    return {
        restrict: 'E',
        templateUrl: 'derectives/form/templates/derective-list-items.html',
        scope: {
            // the list of checkbox items
            items: '=',
        },
        link: function (scope, element, attrs) {

            scope.isTextLike = function (type) {
                return FormGenerator.isTextLike(type);
            }

        }
    }

});