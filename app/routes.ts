import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("dolar","routes/dolar.tsx"),
    route("euro","routes/euro.tsx"),
    route("latam","routes/latam.tsx"),
    route("steam","routes/steam.tsx"),
] satisfies RouteConfig;