// for more information visit https://pages.github.tools.sap/sProcurement/qmate-profiles/

const path = require("path");
const qmateProfiles = require(path.resolve(process.env.QMATE_PROFILES));
const profile = qmateProfiles.report;
// const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  params: {
    import: {
      data: "./data/"
    }
  },

  baseUrl: "htps://ldcierx.devsyst.net.sap:44300/",

  specs: [[
    "specs/01_template.spec.js", 
  ]]
});
