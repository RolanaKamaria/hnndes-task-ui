import TopNavbar from "./TopNavbar";
import BottomNavigation from "./BottomNavigation";

function Layout({ children, currentPage, onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Top Navigation - sticky on scroll */}
      <TopNavbar currentPage={currentPage} onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="pb-20 md:pb-8">{children}</main>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation currentPage={currentPage} onNavigate={onNavigate} />
    </div>
  );
}

export default Layout;
