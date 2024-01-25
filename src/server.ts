import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import routes from "./routes";
import { error } from "./routes/middlewares";

const app = express();

const PORT = process.env.PORT || 3002;


app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);


app.use(routes);
app.use(error);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
