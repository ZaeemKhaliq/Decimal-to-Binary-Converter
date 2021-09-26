const readline = require("readline");
const prompt = require("prompt-sync")({ sigint: true });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

const replaceAt = (string, index, replacement) => {
  return (
    string.substr(0, index) +
    replacement +
    string.substr(index + replacement.length)
  );
};

// var decimal;

// rl.question("Enter a decimal number: ", function (number) {
//   console.log(`You've entered: ${number}`);
//   decimal = number;
//   computeBinary(decimal);
//   rl.close();
// });

// rl.on("close", function () {
//   process.exit(0);
// });

function computeBinary(decimal) {
  var binary = "";
  for (var i = 0; i <= decimal; i++) {
    if (binary.length == 0) {
      binary = `${i}`;
    } else {
      var binaryLength = binary.length;

      for (var j = 0; j < binaryLength; j++) {
        if (j != binaryLength - 1) {
          continue;
        } else if (j == binaryLength - 1) {
          if (binary[j] == "0") {
            binary = replaceAt(binary, j, "1");
          } else {
            let zeroExists = false;
            for (var k = 0; k < binaryLength; k++) {
              if (binary[k] == 1) {
                zeroExists = false;
              } else {
                zeroExists = true;
                break;
              }
            }
            if (zeroExists == false) {
              for (var l = 0; l <= binaryLength; l++) {
                if (l == 0) {
                  binary = replaceAt(binary, l, "1");
                } else {
                  binary = replaceAt(binary, l, "0");
                }
              }
            } else {
              for (var m = binaryLength - 1; m >= 0; m--) {
                if (binary[m] == 0) {
                  binary = replaceAt(binary, m, "1");

                  for (var n = m + 1; n < binaryLength; n++) {
                    binary = replaceAt(binary, n, "0");
                  }
                  break;
                } else {
                  continue;
                }
              }
            }
          }
        }
      }
    }
  }

  console.log("The binary value is: ", binary);
}

const number = prompt("Enter a decimal number: ");
computeBinary(number);
process.exit(0);
