// src/App.tsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import { VendorProvider } from "./contexts/VendorContext";
import { LandingPage, NotFound } from "./pages";
import ErrorBoundary from "./components/ErrorBoundary";
import VendorEmailVerification from "./pages/vendor/EmailVerification";
import VendorForgotPassword from "./pages/vendor/ForgotPassword";
import VendorCompliance from "./pages/vendor/Compliance";

const UserDashboard = lazy(() => import("./pages/user/Dashboard"));
const VendorDashboard = lazy(() => import("./pages/vendor/Dashboard"));
const UserLogin = lazy(() => import("./pages/user/Login"));
const VendorLogin = lazy(() => import("./pages/vendor/Login"));
const UserSettings = lazy(() => import("./pages/user/Settings"));
const UserServices = lazy(() => import("./pages/user/Services"));
const UserBookings = lazy(() => import("./pages/user/Bookings"));
const UserSupport = lazy(() => import("./pages/user/CustomerSupport"));
const VendorServices = lazy(() => import("./pages/vendor/Services"));
const VendorTransactions = lazy(() => import("./pages/vendor/Transactions"));
const VendorSettings = lazy(() => import("./pages/vendor/Settings"));
const VendorSignup = lazy(() => import("./pages/vendor/SignUp"));

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <VendorProvider>
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/user/login" element={<UserLogin />} />
                  <Route path="/vendor/login" element={<VendorLogin />} />
                  <Route path="/vendor/sign-up" element={<VendorSignup />} />
                  <Route
                    path="/vendor/email-verification"
                    element={<VendorEmailVerification />}
                  />
                  <Route
                    path="/vendor/forgot-password"
                    element={<VendorForgotPassword />}
                  />
                  <Route
                    path="/vendor/compliance"
                    element={<VendorCompliance />}
                  />
                  <Route path="/user/dashboard" element={<UserDashboard />}>
                    <Route
                      path="/user/dashboard/"
                      element={<UserDashboard />}
                    />
                    <Route path="settings" element={<UserSettings />} />
                    <Route path="services" element={<UserServices />} />
                    <Route path="bookings" element={<UserBookings />} />
                    <Route path="support" element={<UserSupport />} />
                  </Route>
                  <Route path="/vendor/dashboard" element={<VendorDashboard />}>
                    <Route
                      path="/vendor/dashboard/"
                      element={<VendorDashboard />}
                    />
                    <Route path="services" element={<VendorServices />} />
                    <Route
                      path="transactions"
                      element={<VendorTransactions />}
                    />
                    <Route path="settings" element={<VendorSettings />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </VendorProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
