document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3200, removeNPCAfterInteracted: false, npcCollisionRadius: 100, actionDuration: 1000, npcSpeed: 400, typesOfNPC: 3, jumpHeight: 300});
});