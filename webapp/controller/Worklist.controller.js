/*global location history */
sap.ui.define([
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(BaseController, JSONModel, History, formatter, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("zsapui5proj07.ZSAPUI5_Proj07_SAPProducts.controller.Worklist", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */
		_refresh: function() {
			this.onInit();
		}, //end of _refresh
		onInit: function() {
			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			sap.ui.core.BusyIndicator.show(0);

			odatamodel1.read("/ProductSet", {
				success: function(req, resp) {

					sap.ui.core.BusyIndicator.hide();
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
				}.bind(this),
				error: function(msg) {
					sap.ui.core.BusyIndicator.hide();
					sap.m.MessageToast.show("Failed:Refresh again!:2000" + msg);
				}
			});
		}, //end of onInit
		_sortbycategory: function(oevent) {

			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			//sap.ui.core.BusyIndicator.show(0);
			this.byId("id1").setBusy(true);
			odatamodel1.read("/ProductSet?$orderby=Category", {
				success: function(req, resp) {

					//sap.ui.core.BusyIndicator.hide();
					this.byId("id1").setBusy(false);
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
				}.bind(this),
				error: function(msg) {
					//sap.ui.core.BusyIndicator.hide();
					this.byId("id1").setBusy(false);
					sap.m.MessageToast.show("Failed:Refresh again!:2001" + msg);
				}
			});
		}, //end of _sortbycategory
		_sortbyprice: function() {
			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			sap.ui.core.BusyIndicator.show(0);

			odatamodel1.read("/ProductSet?$orderby=Price", {
				success: function(req, resp) {

					sap.ui.core.BusyIndicator.hide();
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
				}.bind(this),
				error: function(msg) {
					sap.ui.core.BusyIndicator.hide();
					sap.m.MessageToast.show("Failed:Refresh again!:2002" + msg);
				}
			});
		}, //end of _sortbyprice
		_pricele100: function() {
			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			sap.ui.core.BusyIndicator.show(0);
			var filter1 = new Filter("Price", FilterOperator.LE, "100");

			odatamodel1.read("/ProductSet", {
				filters: [filter1],
				success: function(req, resp) {

					sap.ui.core.BusyIndicator.hide();
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
				}.bind(this),
				error: function(msg) {
					sap.ui.core.BusyIndicator.hide();
					sap.m.MessageToast.show("Failed:Refresh again!:2000" + msg);
				}
			});
		}, //end of _pricele100
		_widthbt5_10: function() {
			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			sap.ui.core.BusyIndicator.show(0);
			var filter1 = new Filter("Width", FilterOperator.BT, "5", "10");

			odatamodel1.read("/ProductSet", {
				filters: [filter1],
				success: function(req, resp) {

					sap.ui.core.BusyIndicator.hide();
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
				}.bind(this),
				error: function(msg) {
					sap.ui.core.BusyIndicator.hide();
					sap.m.MessageToast.show("Failed:Refresh again!:2000" + msg);
				}
			});
		}, //end of _widthbt5_10
		_priceandcategory: function() {
			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			sap.ui.core.BusyIndicator.show(0);
			var filter1 = new Filter("Price", FilterOperator.EQ, "1249");
			var filter2 = new Filter("Category", FilterOperator.EQ, "Notebooks");

			odatamodel1.read("/ProductSet", {
				filters: [filter1, filter2],
				success: function(req, resp) {

					sap.ui.core.BusyIndicator.hide();
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
				}.bind(this),
				error: function(msg) {
					sap.ui.core.BusyIndicator.hide();
					sap.m.MessageToast.show("Failed:Refresh again!:2000" + msg);
				}
			});
		}, //end of _priceandcategory
		_searchcategory: function(oevent) {
			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			sap.ui.core.BusyIndicator.show(0);
			var categoryname = oevent.getSource().getValue();

			var filter1 = new Filter("Category", FilterOperator.Contains, categoryname);

			odatamodel1.read("/ProductSet", {
				filters: [filter1],
				success: function(req, resp) {

					sap.ui.core.BusyIndicator.hide();
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
				}.bind(this),
				error: function(msg) {
					sap.ui.core.BusyIndicator.hide();
					sap.m.MessageToast.show("Failed:Refresh again!:2000" + msg);
				}
			});
		}, //end of _searchcategory

		_staticcombo: function(oevent) {

			var key = oevent.getSource().getSelectedKey();
			if (key === "0") {
				this._refresh();
			}
			if (key === "1") {
				this._sortbycategory();
			}
			if (key === "2") {
				this._sortbyprice();
			}
			if (key === "3") {
				this._pricele100();
			}
			if (key === "4") {
				this._widthbt5_10();
			}
			if (key === "5") {
				this._priceandcategory();
			}
		}, //end of _staticcombo

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		_onInit: function() {
			var oViewModel,
				iOriginalBusyDelay,
				oTable = this.byId("table");

			// Put down worklist table's original value for busy indicator delay,
			// so it can be restored later on. Busy handling on the table is
			// taken care of by the table itself.
			iOriginalBusyDelay = oTable.getBusyIndicatorDelay();
			// keeps the search state
			this._aTableSearchState = [];

			// Model used to manipulate control states
			oViewModel = new JSONModel({
				worklistTableTitle: this.getResourceBundle().getText("worklistTableTitle"),
				saveAsTileTitle: this.getResourceBundle().getText("saveAsTileTitle", this.getResourceBundle().getText("worklistViewTitle")),
				shareOnJamTitle: this.getResourceBundle().getText("worklistTitle"),
				shareSendEmailSubject: this.getResourceBundle().getText("shareSendEmailWorklistSubject"),
				shareSendEmailMessage: this.getResourceBundle().getText("shareSendEmailWorklistMessage", [location.href]),
				tableNoDataText: this.getResourceBundle().getText("tableNoDataText"),
				tableBusyDelay: 0
			});
			this.setModel(oViewModel, "worklistView");

			// Make sure, busy indication is showing immediately so there is no
			// break after the busy indication for loading the view's meta data is
			// ended (see promise 'oWhenMetadataIsLoaded' in AppController)
			oTable.attachEventOnce("updateFinished", function() {
				// Restore original busy indicator delay for worklist's table
				oViewModel.setProperty("/tableBusyDelay", iOriginalBusyDelay);
			});
			// Add the worklist page to the flp routing history
			this.addHistoryEntry({
				title: this.getResourceBundle().getText("worklistViewTitle"),
				icon: "sap-icon://table-view",
				intent: "#SAPProducts-display"
			}, true);
		},

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		/**
		 * Triggered by the table's 'updateFinished' event: after new table
		 * data is available, this handler method updates the table counter.
		 * This should only happen if the update was successful, which is
		 * why this handler is attached to 'updateFinished' and not to the
		 * table's list binding's 'dataReceived' method.
		 * @param {sap.ui.base.Event} oEvent the update finished event
		 * @public
		 */
		onUpdateFinished: function(oEvent) {
			// update the worklist's object counter after the table update
			var sTitle,
				oTable = oEvent.getSource(),
				iTotalItems = oEvent.getParameter("total");
			// only update the counter if the length is final and
			// the table is not empty
			if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {
				sTitle = this.getResourceBundle().getText("worklistTableTitleCount", [iTotalItems]);
			} else {
				sTitle = this.getResourceBundle().getText("worklistTableTitle");
			}
			this.getModel("worklistView").setProperty("/worklistTableTitle", sTitle);
		},

		/**
		 * Event handler when a table item gets pressed
		 * @param {sap.ui.base.Event} oEvent the table selectionChange event
		 * @public
		 */
		onPress: function(oEvent) {
			// The source is the list item that got pressed
			this._showObject(oEvent.getSource());
		},

		/**
		 * Event handler when the share in JAM button has been clicked
		 * @public
		 */
		onShareInJamPress: function() {
			var oViewModel = this.getModel("worklistView"),
				oShareDialog = sap.ui.getCore().createComponent({
					name: "sap.collaboration.components.fiori.sharing.dialog",
					settings: {
						object: {
							id: location.href,
							share: oViewModel.getProperty("/shareOnJamTitle")
						}
					}
				});
			oShareDialog.open();
		},

		onSearch: function(oEvent) {
			if (oEvent.getParameters().refreshButtonPressed) {
				// Search field's 'refresh' button has been pressed.
				// This is visible if you select any master list item.
				// In this case no new search is triggered, we only
				// refresh the list binding.
				this.onRefresh();
			} else {
				var aTableSearchState = [];
				var sQuery = oEvent.getParameter("query");

				if (sQuery && sQuery.length > 0) {
					aTableSearchState = [new Filter("Name", FilterOperator.Contains, sQuery)];
				}
				this._applySearch(aTableSearchState);
			}

		},

		/**
		 * Event handler for refresh event. Keeps filter, sort
		 * and group settings and refreshes the list binding.
		 * @public
		 */
		onRefresh: function() {
			var oTable = this.byId("table");
			oTable.getBinding("items").refresh();
		},

		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */

		/**
		 * Shows the selected item on the object page
		 * On phones a additional history entry is created
		 * @param {sap.m.ObjectListItem} oItem selected Item
		 * @private
		 */
		_showObject: function(oItem) {
			this.getRouter().navTo("object", {
				objectId: oItem.getBindingContext().getProperty("ProductID")
			});
		},

		/**
		 * Internal helper method to apply both filter and search state together on the list binding
		 * @param {sap.ui.model.Filter[]} aTableSearchState An array of filters for the search
		 * @private
		 */
		_applySearch: function(aTableSearchState) {
			var oTable = this.byId("table"),
				oViewModel = this.getModel("worklistView");
			oTable.getBinding("items").filter(aTableSearchState, "Application");
			// changes the noDataText of the list in case there are no filter results
			if (aTableSearchState.length !== 0) {
				oViewModel.setProperty("/tableNoDataText", this.getResourceBundle().getText("worklistNoDataWithSearchText"));
			}
		}

	});
});