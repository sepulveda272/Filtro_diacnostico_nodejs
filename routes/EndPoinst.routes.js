import { Router } from "express";
import { endpoint1, endpoint10, endpoint11, endpoint12, endpoint13, endpoint14, endpoint15, endpoint16, endpoint17, endpoint18, endpoint19, endpoint2, endpoint20, endpoint21, endpoint3, endpoint4, endpoint5, endpoint6, endpoint7, endpoint8, endpoint9 } from "../controllers/EndPoinst.controllers.js"

const routes = Router();

routes.get("/endpoint1", endpoint1);
routes.get("/endpoint2", endpoint2);
routes.get("/endpoint3", endpoint3);
routes.get("/endpoint4", endpoint4);
routes.get("/endpoint5", endpoint5);
routes.get("/endpoint6", endpoint6);
routes.get("/endpoint7", endpoint7);
routes.get("/endpoint8", endpoint8);
routes.get("/endpoint9", endpoint9);
routes.get("/endpoint10", endpoint10);
routes.get("/endpoint11", endpoint11);
routes.get("/endpoint12", endpoint12);
routes.get("/endpoint13", endpoint13);
routes.get("/endpoint14", endpoint14);
routes.get("/endpoint15", endpoint15);
routes.get("/endpoint16", endpoint16);
routes.get("/endpoint17", endpoint17);
routes.get("/endpoint18", endpoint18);
routes.get("/endpoint19", endpoint19);
routes.get("/endpoint20", endpoint20);
routes.get("/endpoint21", endpoint21);

export default routes;