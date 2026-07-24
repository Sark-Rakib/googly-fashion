import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import PressReleases from "./pages/PressReleases";
import InvestorRelations from "./pages/InvestorRelations";
import Sustainability from "./pages/Sustainability";
import SellOnGoogly from "./pages/SellOnGoogly";
import BecomeSupplier from "./pages/BecomeSupplier";
import WholesaleProgram from "./pages/WholesaleProgram";
import AffiliateProgram from "./pages/AffiliateProgram";
import BrandRegistry from "./pages/BrandRegistry";
import FulfillmentServices from "./pages/FulfillmentServices";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import ShippingInformation from "./pages/ShippingInformation";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";
import OrderTracking from "./pages/OrderTracking";
import FAQs from "./pages/FAQs";
import PaymentServices from "./pages/PaymentServices";
import GiftCards from "./pages/GiftCards";
import InstallmentPayment from "./pages/InstallmentPayment";
import OffersDiscounts from "./pages/OffersDiscounts";
import RewardsProgram from "./pages/RewardsProgram";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import IntellectualPropertyPolicy from "./pages/IntellectualPropertyPolicy";
import AntiCounterfeitPolicy from "./pages/AntiCounterfeitPolicy";
import Compliance from "./pages/Compliance";
import CumillaWarehouse from "./pages/CumillaWarehouse";
import DhakaWarehouse from "./pages/DhakaWarehouse";
import ChattogramWarehouse from "./pages/ChattogramWarehouse";
import RajshahiWarehouse from "./pages/RajshahiWarehouse";
import KhulnaWarehouse from "./pages/KhulnaWarehouse";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./pages/DashboardOverview";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ProductsList from "./pages/ProductsList";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardProfile from "./pages/DashboardProfile";
import AdminUsers from "./pages/AdminUsers";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderConfirm from "./pages/OrderConfirm";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import TrackOrder from "./pages/TrackOrder";
import ScrollToTop from "./components/ScrollToTop";

const Root = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <ScrollToTop> </ScrollToTop>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press-releases" element={<PressReleases />} />
                <Route path="/investor-relations" element={<InvestorRelations />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/sell-on-googly" element={<SellOnGoogly />} />
                <Route path="/become-supplier" element={<BecomeSupplier />} />
                <Route path="/wholesale-program" element={<WholesaleProgram />} />
                <Route path="/affiliate-program" element={<AffiliateProgram />} />
                <Route path="/brand-registry" element={<BrandRegistry />} />
                <Route path="/fulfillment-services" element={<FulfillmentServices />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/shipping-information" element={<ShippingInformation />} />
                <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
                <Route path="/order-tracking" element={<OrderTracking />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/payment-services" element={<PaymentServices />} />
                <Route path="/gift-cards" element={<GiftCards />} />
                <Route path="/installment-payment" element={<InstallmentPayment />} />
                <Route path="/offers-discounts" element={<OffersDiscounts />} />
                <Route path="/rewards-program" element={<RewardsProgram />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/intellectual-property-policy" element={<IntellectualPropertyPolicy />} />
                <Route path="/anti-counterfeit-policy" element={<AntiCounterfeitPolicy />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/warehouses/cumilla" element={<CumillaWarehouse />} />
                <Route path="/warehouses/dhaka" element={<DhakaWarehouse />} />
                <Route path="/warehouses/chattogram" element={<ChattogramWarehouse />} />
                <Route path="/warehouses/rajshahi" element={<RajshahiWarehouse />} />
                <Route path="/warehouses/khulna" element={<KhulnaWarehouse />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/order-confirm" element={<OrderConfirm />} />
                <Route path="/new-arrivals" element={<NewArrivalsPage />} />
                <Route path="/track-order" element={<TrackOrder />} />
              </Route>

              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
                <Route index element={<DashboardOverview />} />
                <Route path="orders" element={<DashboardOrders />} />
                <Route path="add-product" element={<ProtectedRoute requireAdmin><AddProduct /></ProtectedRoute>} />
                <Route path="edit-product/:id" element={<ProtectedRoute requireAdmin><EditProduct /></ProtectedRoute>} />
                <Route path="products" element={<ProtectedRoute requireAdmin><ProductsList /></ProtectedRoute>} />
                <Route path="users" element={<ProtectedRoute requireAdmin><AdminUsers /></ProtectedRoute>} />
                <Route path="profile" element={<DashboardProfile />} />
              </Route>
            </Routes>
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default Root;
