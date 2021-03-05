

import app from './config/app';

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App Running on http://localhost:${PORT}`);
});
