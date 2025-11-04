// routes.tsx
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("dolar", "routes/dolar.tsx"),
    route("otras", "routes/extranjeras.tsx"),
    route("steam", "routes/steam.tsx"),
  ]),
] satisfies RouteConfig;
