import clsx from "clsx";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  link?: string;
}

export default function SidebarItem({
  icon,
  title,
  active = false,
  link = "#",
}: SidebarItemProps) {
  return (
    <a
      className={clsx(
        "flex gap-2 items-center pl-4 py-2 relative hover:text-primary",
        active ? "text-primary" : "text-base-content",
        active &&
          "before:absolute before:w-[6px] before:h-full before:bg-accent before:rounded-lg before:left-0"
      )}
      href={link}
    >
      <span className="w-8 h-8 block">{icon}</span>
      <span className="text-sm">{title}</span>
    </a>
  );
}
