/// <reference path="B:\Docs\REPOS\Base\Base\Scripts/knockout-3.1.0.js" />



requirejs.config({
    paths: {
        'text': '../Scripts/text',
        "knockout-amd-helpers": "../Scripts/knockout-amd-helpers",
        "knockout-postbox": "../Scripts/knockout-postbox",
        //'ko': '../Scripts/knockout-3.1.0',
        //'vm': 'viewmodels'
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);
//define('knockout-amd-helpers', ko);

vm = 'viewmodels/' + $('#data-required').attr('data-required');

require([vm, "knockout-amd-helpers", "text", "knockout-postbox"], function (viewmodel) {

    ko.bindingHandlers.module.baseDir = "viewmodels";
    ko.amdTemplateEngine.defaultPath = "/";
    ko.amdTemplateEngine.defaultSuffix = "/";


    if (typeof (viewmodel.activate) != 'undefined') {
        
        viewmodel.activate();
    }
    ko.applyBindings(viewmodel);
});
