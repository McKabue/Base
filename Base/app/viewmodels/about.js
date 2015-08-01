// Main viewmodel class
define(['services/includeIn'], function (includeIn) {

    var firstName = ko.observable('Bert');
    var lName = ko.observable().publishOn("x");

    var viewmodel = {
        activate: function () {
        },
        firstName: firstName,
        lName: lName
    };


    includeIn.includeIn(viewmodel);
    return viewmodel;

});