
/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: "com.lovable.joi",
  productName: "Joi - AI Cyber Assistant",
  copyright: "Copyright © 2023",
  asar: true,
  directories: {
    output: "release/${version}",
    buildResources: "resources",
  },
  files: [
    "dist/**/*",
    "electron/**/*",
  ],
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64"],
      },
    ],
    artifactName: "${productName}-Windows-${version}-Setup.${ext}",
    icon: "public/favicon.ico",
  },
  mac: {
    target: ["dmg"],
    artifactName: "${productName}-Mac-${version}.${ext}",
  },
  linux: {
    target: ["AppImage", "deb"],
    artifactName: "${productName}-Linux-${version}.${ext}",
    category: "Utility",
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
  },
};

module.exports = config;
