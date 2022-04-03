//Вова шото натворил(сделал синхронное выполнение с помощья своей магии
// вынос функции в отдельный файл
import fs from "fs";
import csv from "csv-parser";

export default async (fileName, separator) => {
    let result = []
    return new Promise(function (resolve, reject) {
        fs.createReadStream(fileName)
            .pipe(csv({ separator:separator}))
            .on('data', (data) => result.push(data))
            .on('end', () => {
                resolve(result)
            })
            .on('error', reject);
    });
}