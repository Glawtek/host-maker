const cmd1 = process.argv[2];
const cmd2 = process.argv[3];
const fs = require('fs');
let path = "./output/hosts";

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (!cmd1) {
    return console.log(`Usage: node hostmaker 127.0.0.1 2000`);
} else if (cmd1 < 1) {
    return console.log("What would you use this instead make your own hosts?");
} else if (!cmd2) {
    return console.log("Put how much fake ips you want to generate.");
} else if (cmd2 < 1) {
    return console.log("What would you use this instead make your own hosts?");
} else if (isNaN(+cmd2) == true) {
    return console.log("you can't use string to generate fake ip");
} else {

    try {
        var total = "#" + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 254) + " growtopia1.com\n";
        for (var a = 1; a < cmd2; a++) {
            total += "#" + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 254) + " growtopia1.com\n";
        }
        total += cmd1 + " growtopia1.com\n" + cmd1 + " growtopia2.com\n";
        for (var a = 1; a < cmd2; a++) {
            total += "#" + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 254) + " growtopia2.com\n";
        }
        fs.writeFile("./output/hosts", total, function(err) {
            if (err) {
                return console.log(err);
            } else {
                console.log(`Saved hosts on ${path}\nSupport: bit.ly/guckproject`);
            }
        })
    } catch (err) {
        return console.log(err);
    }

}
