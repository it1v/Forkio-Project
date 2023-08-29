// ін-ція  про загальні плагіни, які будуть використовуватися 

import replace from "gulp-replace"; //пошук та заміна 
import plumber from "gulp-plumber"; // обробка помилок
import notify from "gulp-notify"; //повідомлення підказки 
import browsersync from "browser-sync" //локальний сервер
import newer from "gulp-newer";// перевірка оновлень 
import ifPlugin from "gulp-if";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}