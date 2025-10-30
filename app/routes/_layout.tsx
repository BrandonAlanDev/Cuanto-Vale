import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundArrows from "../components/BackgroundArrows";
import Navbar from "~/components/Navbar";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <BackgroundArrows />
      <Navbar/>
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
