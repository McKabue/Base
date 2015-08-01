// Main viewmodel class
define(['services/includeIn'], function (includeIn) {

    var lName = ko.observable('x').publishOn("x");
    var f = ko.observable('Bert').subscribeTo("x");

    var viewmodel = {
        activate: function () {},
        lName: lName,
        f: f
    };


    includeIn.includeIn(viewmodel);
    return viewmodel;

});