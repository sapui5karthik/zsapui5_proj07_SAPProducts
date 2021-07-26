sap.ui.define([
	] , function () {
		"use strict";

		return {
			
			width1 : function(w1){
				
				return parseFloat(w1).toFixed(6);
			},
			discprice1 : function(dp1){
				
				if(dp1 >= 100 && dp1 <= 500){
					return parseFloat(dp1 - 50).toFixed(2);
				}
				if(dp1 > 500 && dp1 <= 1000){
					return parseFloat(dp1 - 100).toFixed(2);
				}
				if(dp1 > 1000 ){
					return parseFloat(dp1 - 300).toFixed(2);
				}
				
				else {
				return dp1;
				}
				
			},
			 color1 : function(c1){
			 		if(c1 >= 100 && c1 <= 500){
					return 'Success';
				}
				if(c1 > 500 && c1 <= 1000){
					return 'Warning';
				}
				if(c1 > 1000 ){
					return 'Error';
				}
				
				else {
				return 'Success';
				}
			 },
			 createdate1 : function(d1){
				var d2 =  sap.ui.core.format.DateFormat.getDateInstance({
					pattern : "YYYY-MMM-dd"
				});
				return d2.format(new Date(d1));	
			 },

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			}

		};

	}
);