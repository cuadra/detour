
const setRules = async () => {
  await chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            url: "alternativeabsolutefilepath",
          },
        },
        condition: {
          regexFilter: "absolutefilepath",
          resourceTypes: ["script", "image", "stylesheet", "font", "xmlhttprequest"],
        },
      },
    ],
  });
};

setRules().catch((error) => {
  console.error("Failed to register redirect rule", error);
});
