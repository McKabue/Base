// Main viewmodel class
define(['services/includeIn'], function (includeIn) {

    var firstName = ko.observable('Bert');
    var firstNameCaps = ko.pureComputed(function () {
        return firstName().toUpperCase();
    }, this);

    var viewmodel = {
        activate: function () {
            
            alert('index activate');

            var x = this.clientErrorHandler('index');
            alert(x);
        },
        firstName: firstName,
        firstNameCaps: firstNameCaps
    };


    includeIn.includeIn(viewmodel);
    return viewmodel;

});