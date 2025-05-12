import { NavLink } from 'react-router-dom'
import { Home, Database, Users, FileText, Building2, Target, KeyRound } from "lucide-react"

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "Accounts",
    href: "/account",
    icon: Database,
  },
   {
    name: "Brokers",
    href: "/brokers",
    icon: Users,
  },
  {
    name: "Submissions",
    href: "/submissions",
    icon: FileText,
  },
  {
    name: "Organizations",
    href: "/organizations",
    icon: Building2,
  },
  {
    name: "Goals & Rules",
    href: "/goals-rules",
    icon: Target,
  },
  {
    name: "Admin",
    href: "/admin",
    icon: KeyRound,
  },
]

export default function Navbar() {
  return (
    <nav className="flex justify-center w-full p-4 bg-[#0f1218]">
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <NavLink
            to={item.href}
            key={item.name}
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors ` +
              (isActive
                ? 'bg-[#2563eb] text-white'
                : 'bg-[#1a1f29] text-gray-300 hover:bg-[#252b38]')
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
