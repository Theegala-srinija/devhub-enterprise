import type { LucideIcon } from 'lucide-react'
import {
  Bell,
  Bug,
  CalendarDays,
  ChartNoAxesCombined,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  Search,
  Settings,
  Users,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

type NavigationItem = {
  label: string
  path: string
  icon: LucideIcon
}

const navigation: NavigationItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Projects', path: '/projects', icon: FolderKanban },
  { label: 'Tasks', path: '/tasks', icon: CheckSquare },
  { label: 'Bugs', path: '/bugs', icon: Bug },
  { label: 'Teams', path: '/teams', icon: Users },
  { label: 'Calendar', path: '/calendar', icon: CalendarDays },
  { label: 'Analytics', path: '/analytics', icon: ChartNoAxesCombined },
]

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 flex w-64 flex-col border-r border-slate-800 bg-slate-900">
      <div className="flex h-16 items-center gap-3 border-b border-slate-800 px-6">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400 text-lg font-black text-slate-950">
          D
        </div>
        <span className="font-bold tracking-tight">DevHub</span>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? 'bg-cyan-400 text-slate-950'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="space-y-1 border-t border-slate-800 p-4">
        <NavLink
          to="/notifications"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-100"
        >
          <Bell size={18} />
          Notifications
        </NavLink>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-100"
        >
          <Settings size={18} />
          Settings
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar