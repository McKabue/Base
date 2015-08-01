
define([],
	function () {

	    var ErrorHandler = (function () {
	        var ctor = function (targetObject) {




	            this.clientErrorHandler = function (data) {
	                return data + data;
	            };









	        };
	        return ctor;
	    })();

	    return {
	        includeIn: includeIn
	    };


	    function includeIn(targetObject) {
	        return $.extend(targetObject, new ErrorHandler(targetObject));
	    }
	});