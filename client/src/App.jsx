import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AddInventory from "./pages/AddInventory.jsx";
import InventoryTable from "./pages/InventoryTable";
import ChangeInventory from "./pages/ChangeInventory";
import IssueInventory from "./pages/IssueInventory";
import IssueInventoryTable from "./pages/IssueInventoryTable.jsx";
import Summary from "./pages/Summary";
import ThreShold from "./pages/Threshold";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login";
import First from "./pages/First";
import ProtectedRoute from "./components/ProtectedRouter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      {
        path: "/add-inventory",
        element: (
          <ProtectedRoute>
            <AddInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/inventory-table",
        element: (
          <ProtectedRoute>
            <InventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/issue-inventory-table",
        element: (
          <ProtectedRoute>
            <IssueInventoryTable />
          </ProtectedRoute>
        ),
      },

      {
        path: "/change-inventory",
        element: (
          <ProtectedRoute>
            <ChangeInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/issue-inventory",
        element: (
          <ProtectedRoute>
            <IssueInventory />
          </ProtectedRoute>
        ),
      },

      {
        path: "/summary",
        element: (
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        ),
      },
      {
        path: "/threshold",
        element: (
          <ProtectedRoute>
            <ThreShold />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
