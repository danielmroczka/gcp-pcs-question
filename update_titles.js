const fs = require('fs');
const path = require('path');

const directory = '.';
const regex = /^q_(\d+)\.html$/;

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(file => {
        const match = file.match(regex);
        if (match) {
            const number = parseInt(match[1], 10); // Remove leading zeros
            const filePath = path.join(directory, file);

            fs.readFile(filePath, 'utf8', (err, content) => {
                if (err) {
                    console.error(`Error reading file ${file}:`, err);
                    return;
                }

                const newTitle = `<title>Question ${number}</title>`;
                const titleRegex = /<title>.*?<\/title>/i;

                if (titleRegex.test(content)) {
                    const newContent = content.replace(titleRegex, newTitle);
                    if (newContent !== content) {
                        fs.writeFile(filePath, newContent, 'utf8', (err) => {
                            if (err) {
                                console.error(`Error writing file ${file}:`, err);
                            } else {
                                // console.log(`Updated ${file} to ${newTitle}`);
                            }
                        });
                    } else {
                        // console.log(`No change needed for ${file}`);
                    }
                } else {
                    console.warn(`No <title> tag found in ${file}`);
                    // Optional: Insert title if missing, but requirement implies updating.
                }
            });
        }
    });
    console.log("Processing started for all matching files.");
});
