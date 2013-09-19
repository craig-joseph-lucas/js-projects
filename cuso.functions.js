/**
* @file Scripts specific to Custom Solutions.
* Created:  06/10/2013
* Modified: 06/10/2013
*/

/**
* CuSo
* @namespace
* @type {object}
* @global
* @public
*/
var CuSo = CuSo || {};

/**
* Immediately-Invoked Function Expression.
*
* @function
* @param {object} $ - Global jQuery object.
*/
(function ($) {

    // strict js
    'use strict';
	
    /**
    * Creates an instance of functionsConstructor.
    * Modified: 06/10/2013
    *
    * @constructor
    * @author Craig Lucas <clucas@everydayhealthinc.com>
    */
    CuSo.PageFunctionsConstructor = function () { };
	
	
	    /**
    * Inheritable methods.
    *
    * @type {object}
    */
    CuSo.PageFunctionsConstructor.prototype = { };
	

    /**
    * Instantiate object.
    *
    * @type {object}
    * @see {@link CuSo.PageFunctionsConstructor}
    * @public
    */
    CuSo.Page = new CuSo.PageFunctionsConstructor();

    // dom ready
    $(function () {

        // page init
        CuSo.Page.init();

    });
	
	
	} (jQuery, window));
	
	