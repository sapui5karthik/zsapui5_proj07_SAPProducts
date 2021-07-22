sap.ui.define([
		"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zsapui5proj07.ZSAPUI5_Proj07_SAPProducts.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);