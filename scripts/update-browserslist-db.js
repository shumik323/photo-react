// https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback

const { exec } = require('child_process');

exec('npx browserslist@latest --update-db', (error, stdout) => {
    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }

    console.log(`stdout:\n${stdout}`);
});
