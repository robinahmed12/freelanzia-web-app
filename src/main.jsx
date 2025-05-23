// src/main.jsx or index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes.jsx";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthProvider from "./context/AuthProvider.jsx";
import App from "./App.jsx";

const queryClient = new QueryClient();

// Theme Context

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App>
          <RouterProvider router={router} />
        </App>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
