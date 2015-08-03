define(['services/includeIn'], function (includeIn) {

    

    var viewmodel = {
        activate: function () {

            alert('appsecurity activate');

            var x = this.clientErrorHandler('appsecurity');
            alert(x);
        }
    };


    includeIn.includeIn(viewmodel);
    return viewmodel;

});