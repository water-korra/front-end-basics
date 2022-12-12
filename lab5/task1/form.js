"use strict";
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const IdCard = document.getElementById("IdCard");
const faculty = document.getElementById("faculty");
const BirthDate = document.getElementById("BirthDate");
const submit = document.getElementById("submit");
const outputInfo = document.querySelector(".output");

const userNameRegExp = /^[А-ЯҐЄІЇ]{1}[а-яґєії]+\s{1}([А-ЯҐЄІЇ]{1}\.){2}$/;
const phoneNumberRegExp = /\(\d\d\d\).*\d\d\d.*\d\d.*\d\d/;
const idCardRegExp = /^[А-ЯҐЄІЇ]{2}\s\№[0-9]{6}$/;
const facultyRegExp = /^[А-ЯҐЄІЇ]{4}$/;
const birthDateRegExp = /^([0-9]{2}\.){2}[0-9]{4}$/;


const checkData = (element, regExp, errorName, errors) => {
    const changeBorder = (element, color) => {
        element.style.border = `2px solid ${color}`;
    };
    if (!regExp.test(element.value)) {
        changeBorder(element, "red");
        errors.push({ element: errorName });
        alert(errorName);
    } else {
        changeBorder(element, "green");
    }
};

const validate = () => {
    let errors = [];
    checkData(
        username,
        userNameRegExp,
        "Введіть ПІБ у форматі ТТТТТТ Т.Т.",
        errors
    );
    checkData(
        phone,
        phoneNumberRegExp,
        "Введіть номер телефону у форматі (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ",
        errors
    );
    checkData(
        IdCard,
        idCardRegExp,
        "Введіть номер карти у форматі ТТ NoЧЧЧЧЧЧ",
        errors
    );
    checkData(
        faculty,
        facultyRegExp,
        "Введіть назву факультету у форматі ТТТТ",
        errors
    );
    checkData(
        BirthDate,
        birthDateRegExp,
        "Введіть ДН у форматі ЧЧ.ЧЧ.ЧЧЧЧ",
        errors
    );
    if (errors.length == 0) {
        outputInfo.style.display = "block";
    }
};

const dataArray = [username, phone, IdCard, faculty, BirthDate];

const resultsOutput = () => {
    const outputField = document.getElementById("output");
    for (let element of dataArray) {
        let dataParagraph = document.createElement("p");
        dataParagraph.textContent = element.value;
        outputField.appendChild(dataParagraph);
    }
};

const onSubmitAction = () => {
    validate();
    resultsOutput();
};

submit.addEventListener("click", (e) => onSubmitAction());
