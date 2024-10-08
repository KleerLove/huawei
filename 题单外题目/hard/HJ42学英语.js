const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let num = await readline();
    num = parseInt(num);
    console.log(numberToEnglish(num));

    function numberToEnglish(num) {
        if (num === 0) return "zero";

        const ones = [
            "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
            "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
            "seventeen", "eighteen", "nineteen"
        ];
        const tens = [
            "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
        ];
        const scales = ["", "thousand", "million", "billion"];

        function convertHundreds(num) {
            let result = "";
            if (num >= 100) {
                result += ones[Math.floor(num / 100)] + " hundred";
                num %= 100;
                if (num > 0) result += " and "; // 英式英语，百位和十位之间要加"and"
            }
            if (num < 20) {
                result += ones[num];
            } else {
                result += tens[Math.floor(num / 10)];
                if (num % 10 > 0) result += " " + ones[num % 10];
            }
            return result;
        }

        function convertLargeNumbers(num) {
            let result = "";
            let scaleIndex = 0;

            while (num > 0) {
                let chunk = num % 1000;
                if (chunk > 0) {
                    let chunkInWords = convertHundreds(chunk);
                    if (scales[scaleIndex]) {
                        chunkInWords += " " + scales[scaleIndex];
                    }
                    result = chunkInWords + (result ? " " + result : "");
                }
                num = Math.floor(num / 1000);
                scaleIndex++;
            }

            return result.trim();
        }

        return convertLargeNumbers(num);
    }
})();
