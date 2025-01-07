"use strict";

describe("01_template - describe your test", function () {
  const data = util.data.getData("01_template");
  const references = util.data.getData("references");

  it("Step 01: Navigation to ERX URL", async function () {
    await common.navigation.navigateToUrl("https://ldcierx.devsys.net.sap:44300/sap/bc/adt/businessservices/odatav4/feap/C%C2%87u%C2%84C%C2%83%C2%84%C2%89C%C2%83xu%C2%88uHC%C2%87u%C2%84C%C2%89%7Ds%C2%88%C2%86uxyw%C2%80u%7D%C2%81%C2%86y%C2%85%C2%89y%C2%87%C2%88s%C2%8AHC%C2%87%C2%86%C2%8AxC%C2%87u%C2%84C%C2%89%7Ds%C2%88%C2%86uxyw%C2%80u%7D%C2%81%C2%86y%C2%85%C2%89y%C2%87%C2%88CDDDEC77Wsh%C2%86uxyW%C2%80u%7D%C2%81fy%C2%85%C2%89y%C2%87%C2%88hd77sV%7D%C2%80%C2%80h%C2%83du%C2%86%C2%88%C2%8DTTsW%C2%83%C2%81%C2%84u%C2%82%C2%8DW%C2%83xyTTsW%C2%83%C2%89%C2%82%C2%88%C2%86%C2%8DTTsX%7D%C2%87%C2%88%C2%86%7Dv%C2%89%C2%88%7D%C2%83%C2%82W%7Cu%C2%82%C2%82y%C2%80TTs%5D%C2%82%C2%8A%C2%83%7Dw%7D%C2%82%7Bdu%C2%86%C2%88%C2%8DTTsb%C2%83%C2%88yVu%C2%87%7DwTTsc%C2%86%7Bu%C2%82%7D%C2%8Eu%C2%88%7D%C2%83%C2%82X%7D%C2%8A%7D%C2%87%7D%C2%83%C2%82TTsdu%C2%8D%C2%81y%C2%82%C2%88ay%C2%88%7C%C2%83xTTsdu%C2%8D%C2%81y%C2%82%C2%88hy%C2%86%C2%81%C2%87TTsd%C2%89%C2%86w%7Cu%C2%87%7D%C2%82%7B%5B%C2%86%C2%83%C2%89%C2%84TTsd%C2%89%C2%86w%7Cu%C2%87%7D%C2%82%7Bc%C2%86%7Bu%C2%82%7D%C2%8Eu%C2%88%7D%C2%83%C2%82TTsgu%C2%80y%C2%87%5B%C2%86%C2%83%C2%89%C2%84TTsgu%C2%80y%C2%87czz%7DwyTTsgu%C2%80y%C2%87c%C2%86%7Bu%C2%82%7D%C2%8Eu%C2%88%7D%C2%83%C2%82TTsh%C2%86uxyW%C2%80u%7D%C2%81fy%C2%85%C2%89y%C2%87%C2%88X%C2%83wfyzTTsh%C2%86uxyW%C2%80u%7D%C2%81fy%C2%85%C2%89y%C2%87%C2%88%5D%C2%88y%C2%81TTsh%C2%86uxyW%C2%80u%7D%C2%81fy%C2%85%C2%89y%C2%87%C2%88du%C2%86%C2%88%C2%82y%C2%86TTsh%C2%86xW%C2%80%C2%81fy%C2%85W%C2%89%C2%86%C2%86y%C2%82w%C2%8D77V%7D%C2%80%C2%80h%C2%83du%C2%86%C2%88%C2%8DTTW%C2%83%C2%81%C2%84u%C2%82%C2%8DW%C2%83xyTTW%C2%83%C2%89%C2%82%C2%88%C2%86%C2%8DTTX%7D%C2%87%C2%88%C2%86%7Dv%C2%89%C2%88%7D%C2%83%C2%82W%7Cu%C2%82%C2%82y%C2%80TT%5D%C2%82%C2%8A%C2%83%7Dw%7D%C2%82%7Bdu%C2%86%C2%88%C2%8DTTWsb%C2%83%C2%88yVu%C2%87%7DwhdTTc%C2%86%7Bu%C2%82%7D%C2%8Eu%C2%88%7D%C2%83%C2%82X%7D%C2%8A%7D%C2%87%7D%C2%83%C2%82TTdu%C2%8D%C2%81y%C2%82%C2%88ay%C2%88%7C%C2%83xTTdu%C2%8D%C2%81y%C2%82%C2%88hy%C2%86%C2%81%C2%87TTd%C2%89%C2%86w%7Cu%C2%87%7D%C2%82%7B%5B%C2%86%C2%83%C2%89%C2%84TTd%C2%89%C2%86w%7Cu%C2%87%7D%C2%82%7Bc%C2%86%7Bu%C2%82%7D%C2%8Eu%7D%C2%88%C2%83%C2%82TTgu%C2%80y%C2%87%5B%C2%86%C2%83%C2%89%C2%84TTgu%C2%80y%C2%87czz%7DwyTTgu%C2%80y%C2%87c%C2%86%7Bu%C2%82%7D%C2%8Eu%C2%88%7D%C2%83%C2%82TTWsh%C2%86uxyW%C2%80u%7D%C2%81fy%C2%85%C2%89y%C2%87%C2%88X%C2%83wfyzhdTTWsh%C2%86uxyW%C2%80u%7D%C2%81fy%C2%85%C2%89y%C2%87%C2%88%5D%C2%88y%C2%81hdTTWsh%C2%86uxyW%C2%80u%7D%C2%81fy%C2%85%C2%89y%C2%87%C2%88du%C2%86%C2%88%C2%82y%C2%86hdTTW%C2%89%C2%86%C2%86y%C2%82w%C2%8D77i%5DshfUXYW%60U%5DafYeiYgh77DDDE77i%5DshfUXYW%60U%5DafYeiYghsjH/flp.html?sap-ui-xx-viewCache=false&sap-ui-language=EN&sap-client=001#app-preview");
  });

  it("Step 02: Press Go to View All", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.Button",
        "text": "Go"
      }
    };
    await ui5.userInteraction.click(selector);
  });

  it("Step 03: Add a Filter", async function () {
    // Select the filter field
    const filterFieldSelector = {
      "elementProperties": {
        "metadata": "sap.ui.mdc.field.FieldInput",
        "id": "*DraftEditingStatus-inner"
      }
    };
    await ui5.userInteraction.click(filterFieldSelector);
  
    // Enter the filter value
    await ui5.userInteraction.fill(filterFieldSelector, "Unsaved Changes by Another User");
  
    // Press Enter to apply the filter
    await common.userInteraction.pressEnter();
  
    // Wait for the filter to be applied
    await util.browser.sleep(2000);
  
    // Clear the filter
    await ui5.userInteraction.clear(filterFieldSelector);
  
    // Press Enter to apply the cleared filter
    await common.userInteraction.pressEnter();
  
    // Wait for the filter to be cleared
    await util.browser.sleep(2000);
    });

  it("Step 04: Confirm Accurate Number of Trades", async function () {

  });

  it("Step 05: Logout", async function() {
    await ui5.session.logout();
  })
});