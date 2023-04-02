import { useState } from "react";
import router from "../config/router";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import queryClient from "../config/queryClient";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
