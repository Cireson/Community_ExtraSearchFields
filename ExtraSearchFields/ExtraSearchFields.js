// Extra Search Fields
//loadScript("/CustomSpace/ExtraSearchFields/ExtraSearchFields.js",["/View/"]);

// Contributors: Geoff Ross
// Description: Adds Support Group to MA, CR and PR search fields and Created By to Everything

$(function () {
    setTimeout(function () {
        if (typeof(queryBuilderStandardConfigurationDefinitions) !== "undefined") {
        
            // Support Group on MA, CR, PR
            queryBuilderStandardConfigurationDefinitions.workItemConfig.schemaDef.sections[3].fields.splice(31,0,{name: "tierId", displayKey: "SupportGroup", fieldType: "enum", templateValue: "033102c1-7fee-2da1-b705-1bf4a8763473", displayName: "Support Group"});
            queryBuilderStandardConfigurationDefinitions.workItemConfig.schemaDef.sections[4].fields.splice(27,0,{name: "tierId", displayKey: "SupportGroup", fieldType: "enum", templateValue: "188e5912-1031-dce2-08d3-c03c6a6f1b9e", displayName: "Support Group"});
            queryBuilderStandardConfigurationDefinitions.workItemConfig.schemaDef.sections[6].fields.splice(31,0,{name: "tierId", displayKey: "SupportGroup", fieldType: "enum", templateValue: "d9e024e7-8ab6-c7a2-7d3e-e653c07d616e", displayName: "Support Group"});
            
            // Add Created By
            var createdIndex;
            queryBuilderStandardConfigurationDefinitions.workItemConfig.schemaDef.sections.forEach(function(section) {
                createdIndex = section.fields.findIndex(function(x) {return x.name == "Created";});
                section.fields.splice(createdIndex + 1,0,{name: "CreatedByUserId", displayKey: "CreatedBy", fieldType: "user", templateValue: "", displayName: "Created By"});
            });
            createdIndex = queryBuilderStandardConfigurationDefinitions.workItemConfig.schemaDef.commonFields.findIndex(function(x) {return x.name == "Created";});
            queryBuilderStandardConfigurationDefinitions.workItemConfig.schemaDef.commonFields.splice(createdIndex + 1,0,{name: "CreatedByUserId", displayKey: "CreatedBy", fieldType: "user", templateValue: "", displayName: "Created By"});

            if ($('.wi-search-edit-btn').css("display") === "none") {
                $('.section-header .btn.btn-danger.k-button').trigger("click");
                $('.form-group .btn.btn-primary.k-button').trigger("click");
            }
        }
    },1500);
});
