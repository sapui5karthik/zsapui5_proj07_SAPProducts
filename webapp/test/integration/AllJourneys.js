/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/pages/Worklist",
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/pages/Object",
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/pages/NotFound",
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/pages/Browser",
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zsapui5proj07.ZSAPUI5_Proj07_SAPProducts.view."
	});

	sap.ui.require([
		"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/WorklistJourney",
		"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/ObjectJourney",
		"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/NavigationJourney",
		"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/NotFoundJourney",
		"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});