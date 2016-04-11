app.controller("sampleCtrl", function ($scope, FormGenerator) {

    var sample_fields = [
        {type: "divider", label: "Information"},
        {name: "name", label: "Name"},
        {name: "email", label: "Email", type: "email"},
        {name: "about", label: "About Me", type: "textarea"},
        {name: "hobbies", label: "Hobbies", type: "checkbox",
            options: [
                {label: "Reading", value: "reading"},
                {label: "Writing", value: "writing"},
                {label: "Swimming", value: "swimming"},
            ],
        },
        {
            name: "gender", label: "Gender", type: "radio",
            options: [
                {label: "Male", value: "male"},
                {label: "Female", value: "female"},
            ],
            option_default: "male"
        },
    ];


    $scope.sample_field_value = {
        name: "Sam",
        age: "28",
        about: "lorem ipsum",
        hobbies: ["swimming", "writing"],
        gender: "female",
    };

    var sample_field_value = {
        name: "John",
        age: "28",
    };




    $scope.sample_refine = FormGenerator.refine_field_attributes(sample_fields, sample_field_value);

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




app.service("FormGenerator", function () {

    // refine field attributes
    this.refine_field_attributes = function (fields, valueObj) {

        var refine = {};

        angular.forEach(fields, function (value, key) {

            var type = (value.type) ? value.type : "text";
            var field_value = (valueObj[value.name]) ? valueObj[value.name] : "";

            var new_data = {
                name: value.name,
                label: value.label,
                value: field_value,
                type: type
            };

            if (type == 'select') {
                new_data.options = value.options;

                if (!value.option_default) {
                    new_data.options.unshift({label: " - ", value: ""});
                }

                if (value.option_default && field_value == "") {

                    new_data.value = value.option_default;
                }
            }

            if (type == 'radio') {
                new_data.options = value.options;

                if (value.option_default && field_value == "") {
                    new_data.value = value.option_default;
                }
            }

            if (type == 'checkbox') {
                new_data.options = value.options;

                if (value.option_default && field_value == "") {
                    new_data.value = value.option_default;
                }
            }

            refine[value.name] = new_data;
        });


        return refine;
    }

    // set required fields in refine
    this.filter_fields = function (refined_fields, required) {
        var structured = [];
        angular.forEach(required, function (value, key) {
            var new_data = refined_fields[value];
            structured.push(new_data);
        });
        return structured;
    }




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
                var fields = ["text", "password", "email", "number", "url"];
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
                    return 1;
                } else {
                    //not found
                    return 0;
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


