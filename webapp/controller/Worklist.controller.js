/*global location history */
sap.ui.define([
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"zsapui5proj07/ZSAPUI5_Proj07_SAPProducts/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(BaseController, JSONModel, History, formatter, Filter, FilterOperator, MessageBox, MessageToast) {
	"use strict";

	return BaseController.extend("zsapui5proj07.ZSAPUI5_Proj07_SAPProducts.controller.Worklist", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */
		_refresh: function() {
			this.onInit();
		}, //end of _refresh
		_rowselected: function(oevent) {
			//MessageToast.show("Row clicked");
			//get the router reference
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.navTo("object", {
				from: "worklist",
				to: "object",
				ProductID: oevent.getSource().getBindingContext("sapprod").getProperty("ProductID")
			}, true);

		}, //end of _rowselected
		onInit: function() {
			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			var jsonmodeldynacombo = new JSONModel();

			sap.ui.core.BusyIndicator.show(0);

			odatamodel1.read("/ProductSet", {
				success: function(req, resp) {

					sap.ui.core.BusyIndicator.hide();
					jsonmodel1.setSizeLimit(1000);
					jsonmodeldynacombo.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					jsonmodeldynacombo.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
					this.getView().byId("iddynamiccombo").setModel(jsonmodeldynacombo, "dynacb");
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
		_dynacombo: function(oevent) {
			var productid = oevent.getParameter("value");

			var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			sap.ui.core.BusyIndicator.show(0);
			var filter1 = new Filter("ProductID", FilterOperator.EQ, productid);

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

		}, //end of _dynacombo
		_getSelectedTableRowsData: function(oevent) {
			if (oevent.getParameter("selected")) {
				var bc = oevent.getSource().getBindingContext("sapprod");
				var pid = bc.getProperty("ProductID");
				var tc = bc.getProperty("TypeCode");
				var cat = bc.getProperty("Category");
				var name = bc.getProperty("Name");
				MessageBox.alert(pid + "\n" + tc + "\n" + cat + "\n" + name);

			}
		}, //end of _getSelectedTableRowsData
		_openhelloworldfragment: function() {
			//create a fragment object

			//this.a = sap.ui.xmlfragment(id of the fragment,path to the fragment,point to the fragment itself);
			if (!this.a) {
				this.a = sap.ui.xmlfragment(this.getView().getId(), "zsapui5proj07.ZSAPUI5_Proj07_SAPProducts.fragments.HelloWorld", this);
				this.getView().addDependent(this.a);
			}
			// open the fragment object
			this.a.open();
		}, //end of _openhelloworldfragment

		_cancelHelloWorldbox: function() {
			this.a.close();
		}, //end of _cancelHelloWorldbox
		_opensortbox : function(){
			
			if(!this.sortreq){
			this.sortreq = sap.ui.xmlfragment(this.getView().getId(),"zsapui5proj07.ZSAPUI5_Proj07_SAPProducts.fragments.Sort",this);
			this.getView().addDependent(this.sortreq);
			}
			this.sortreq.open();
			this.byId("sortrbgroup").setSelectedIndex(-1);
		},//end of _opensortbox
		_sortasc : function(){
			var param = this.byId("sortrbgroup").getSelectedButton().getText();
			
				var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			//sap.ui.core.BusyIndicator.show(0);
			this.byId("sortabutton").setBusy(true);
			odatamodel1.read("/ProductSet?$orderby="+param+"", {
				success: function(req, resp) {

					//sap.ui.core.BusyIndicator.hide();
					this.byId("sortabutton").setBusy(false);
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
					this.sortreq.close();
				}.bind(this),
				error: function(msg) {
					//sap.ui.core.BusyIndicator.hide();
					
					sap.m.MessageToast.show("Failed:Refresh again!:2001" + msg);
				}
			});
			
		},//end of _sortasc
		_sortdesc : function(){
				var param = this.byId("sortrbgroup").getSelectedButton().getText();
			
				var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
			var jsonmodel1 = new sap.ui.model.json.JSONModel();
			//sap.ui.core.BusyIndicator.show(0);
			this.byId("sortdbutton").setBusy(true);
			odatamodel1.read("/ProductSet?$orderby="+param+" desc", {
				success: function(req, resp) {

					//sap.ui.core.BusyIndicator.hide();
					this.byId("sortdbutton").setBusy(false);
					jsonmodel1.setSizeLimit(1000);
					jsonmodel1.setData(req.results);
					this.getView().byId("table1").setModel(jsonmodel1, "sapprod");
					this.sortreq.close();
				}.bind(this),
				error: function(msg) {
					//sap.ui.core.BusyIndicator.hide();
					
					sap.m.MessageToast.show("Failed:Refresh again!:2001" + msg);
				}
			});
		},//end of _sortdesc
		_sortcancel : function(){
			this.sortreq.close();
		},//end of _sortcancel
		_openfilterbox : function(){
			
			if(!this.filterreq){
			this.filterreq = sap.ui.xmlfragment(this.getView().getId(),"zsapui5proj07.ZSAPUI5_Proj07_SAPProducts.fragments.Filter",this);
			this.getView().addDependent(this.filterreq);
			}
			this.filterreq.open();
			
		},//end of _openfilterbox
		_closefilter : function(){
			this.filterreq.close();
		},//end of _closefilter
		_filter : function(){
			var category = this.byId("category").getValue();
			var price = this.byId("price").getValue();
			
			var filtercategory = new Filter("Category",FilterOperator.Contains,category);
			var filterprice = new Filter("Price",FilterOperator.EQ,price);
			
			var xfilter = [];
			
			if(category !==""){
				xfilter.push(filtercategory);
			}
			if(price !==""){
				xfilter.push(filterprice);
			}
			
			var finalfilter = new Filter({
				filters : xfilter,
				and : true
			});
			
			var binding = this.getView().byId("table1").getBinding("items");
			binding.filter([finalfilter]);
			this.filterreq.close();
			
		},//end of _filter
		
		_clearfilters : function(){
				var binding = this.getView().byId("table1").getBinding("items");
				binding.filter();
		},//end of _clearfilters
		
		
		
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