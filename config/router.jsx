import { createBrowserRouter } from "react-router-dom";
import Root from "../src/pages/Root/Index";
import SingleMood from "../src/pages/SingleMood/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/mood/:moodCategory",
        element: <SingleMood />,
    },
]);

export default router;
