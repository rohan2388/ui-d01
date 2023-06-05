import Profile from "@/components/partials/sidebar-profile";
import SidebarItem from "@/components/partials/sidebar-item";
import GeneralIcon from "@/components/icons/sidebar/general";
import PasswordIcon from "@/components/icons/sidebar/password";
import InvitationsIcon from "@/components/icons/sidebar/invitations";
import BillingIcon from "@/components/icons/sidebar/billing";
import AppsIcon from "@/components/icons/sidebar/apps";
import LogoutIcon from "@/components/icons/sidebar/logout";

export default function Sidebar() {
  return (
    <div className="bg-[#F8F8FF] flex flex-col">
      <div className="px-8 pt-12">
        <Profile />
      </div>

      <div className="px-4 pt-12 flex flex-col gap-2">
        <SidebarItem title="General" icon={<GeneralIcon />} />
        <SidebarItem title="Password" icon={<PasswordIcon />} />
        <SidebarItem title="Invitations" icon={<InvitationsIcon />} />
        <SidebarItem title="Billing" icon={<BillingIcon />} active />
        <SidebarItem title="Apps" icon={<AppsIcon />} />
      </div>

      <div className="mt-auto mb-8 px-4">
        <SidebarItem title="Log out" icon={<LogoutIcon />} />
      </div>
    </div>
  );
}
