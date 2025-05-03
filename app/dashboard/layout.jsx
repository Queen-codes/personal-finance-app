import SideNav from "../ui/dashboard/SideNav";
import BottomNav from "../ui/dashboard/BottomNav";
export default function Layout({ children }) {
  return (
    <div>
      <SideNav />
      <div>{children}</div>
      <BottomNav />
    </div>
  );
}
