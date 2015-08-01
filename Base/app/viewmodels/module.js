// Main viewmodel class
define(['services/includeIn'], function (includeIn) {

    var firstName = ko.observable('Bert');
    
    var fName = ko.observable().subscribeTo("x");
    

    var viewmodel = {
        activate: function () { },

        firstName: firstName,
        fName: fName
        

    };


    includeIn.includeIn(viewmodel);
    return viewmodel;

});