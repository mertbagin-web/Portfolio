import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  icon: string;
  label: string;
  color: string;
}

export default function SidePanelSubLink({ href, icon, label, color }: Props) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li className={isActive ? "active" : ""}>
      <Link href={href} style={{ display: "flex", alignItems: "center", gap: "4px", textDecoration: "none", color: "inherit", width: "100%" }}>
        <span style={{ color, fontSize: "13px" }}>{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
}
