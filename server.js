const express = require('express')

const _app_folder = 'dist/querido-diario';

const app = express();
app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

app.listen(process.env.PORT || 8080);