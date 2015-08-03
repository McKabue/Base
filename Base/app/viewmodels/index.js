// Main viewmodel class
define(['services/includeIn', 'services/appsecurity'], function (includeIn, appsecurity) {

    var firstName = ko.observable('Bert');
    var firstNameCaps = ko.pureComputed(function () {
        return firstName().toUpperCase();
    }, this);

    var activate = function () {
            
        //alert('index activate');

        var x = this.clientErrorHandler('index');
        //alert(x);

        if (typeof (appsecurity.activate) != 'undefined') {
            appsecurity.activate();
        }
    };

    var viewmodel = {
        activate: activate,
        firstName: firstName,
        firstNameCaps: firstNameCaps
    };

    
    includeIn.includeIn(viewmodel);
    return viewmodel;

});