const { readFile, writeFile } = require("fs");

readFile("./practice Files/testing.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error In file 1");
        return;
    }

    const file1 = data;
    // console.log(`File Data : ${data}`)

    readFile("./practice Files/fruits.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error In file 2");
            return;
        }
        const fruits = data;

        writeFile(
            "./practice Files/mergeAsync.txt",
            `-------Data from Testing file ------- \n ${file1} \n\n-----Data from Fruits File ------- \n ${fruits}`,
            (error, result) => {
                if (error) {
                    console.log("Error In Merging");
                    return;
                }
                console.log('done !!')
            }
        );
    });
});
