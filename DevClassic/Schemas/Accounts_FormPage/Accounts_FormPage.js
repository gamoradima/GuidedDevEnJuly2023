define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "Industry"
			},
			{
				"operation": "remove",
				"name": "addRecord_y9dz5pc"
			},
			{
				"operation": "merge",
				"name": "AddressList",
				"values": {
					"selectedRows": "$AddressList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "AddressList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactsList",
				"values": {
					"selectedRows": "$ContactsList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "ContactsList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "RecommendedProductList",
				"values": {
					"selectedRows": "$RecommendedProductList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "RecommendedProductList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadList",
				"values": {
					"selectedRows": "$LeadList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "LeadList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityList",
				"values": {
					"selectedRows": "$OpportunityList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "OpportunityList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OrderList",
				"values": {
					"selectedRows": "$OrderList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "OrderList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContractList",
				"values": {
					"selectedRows": "$ContractList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "ContractList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "InvoiceList",
				"values": {
					"selectedRows": "$InvoiceList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "InvoiceList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "DocumentList",
				"values": {
					"selectedRows": "$DocumentList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "DocumentList_SelectedRows"
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrWebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_hv6c9gj",
					"labelPosition": "auto",
					"control": "$StringAttribute_hv6c9gj",
					"multiline": false,
					"placeholder": "#ResourceString(UsrWebsiteCode_placeholder)#",
					"tooltip": "#ResourceString(UsrWebsiteCode_tooltip)#"
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_hv6c9gj": {
					"modelConfig": {
						"path": "PDS.UsrWebsiteCode"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});