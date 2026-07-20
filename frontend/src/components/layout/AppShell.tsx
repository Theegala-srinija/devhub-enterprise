import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function AppShell() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="min-h-screen pl-64">
        <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8">
          <div>
            <p className="text-sm text-slate-400">Workspace</p>
            <h1 className="text-lg font-semibold">DevHub Enterprise</h1>
          </div>

          <button className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan-500 font-bold text-slate-950">
              S
            </span>
            <span>Srini</span>
          </button>
        </header>

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AppShell