import "dotenv/config";
import app from "./src/app";
import db from "./src/config/mongo";

db()
  .then(() => console.log('🟢 DB connection succesfull'))
  .catch((error) => {
    console.log('--- 🔴 DB ERROR ---');
    console.log(error);
    console.log('-------------------');
  });

app.listen(process.env.PORT || 3001, () => {
  console.log(`🟢 Server listening at ${process.env.PORT}`);
});
