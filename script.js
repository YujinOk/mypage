"use strict";
const btnClosePage = document.querySelector(".hiddenPage");
const btnOpenPage = document.querySelector(".openPage");

const btnShowPage = function () {
  btnShowPage.classList.remove("hiddenPage");
};

const btnClosePage = function () {
  btnClosePage.classList.add("hiddenPage");
};
