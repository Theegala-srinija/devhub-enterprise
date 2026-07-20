import { ArrowUpRight, Bug, CheckSquare, FolderKanban, Users } from 'lucide-react'

const metrics = [
  { label: 'Active Projects', value: '8', change: '+2 this month', icon: FolderKanban },
  { label: 'My Open Tasks', value: '14', change: '4 due this week', icon: CheckSquare },
  { label: 'Open Bugs', value: '6', change: '2 high priority', icon: Bug },
  { label: 'Team Members', value: '24', change: '18 online now', icon: Users },
]

const tasks = [
  { title: 'Implement JWT authentication', project: 'DevHub API', status: 'In Progress', priority: 'High' },
  { title: 'Create dashboard widgets', project: 'DevHub Frontend', status: 'To Do', priority: 'Medium' },
  { title: 'Review database schema', project: 'Architecture', status: 'Review', priority: 'High' },
]

function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="flex items-end justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">Monday, July 20</p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight">Good morning, Srini.</h2>
          <p className="mt-2 text-slate-400">Here is what is happening across your workspace.</p>
        </div>

        <button className="rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-300">
          + Create Project
        </button>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ label, value, change, icon: Icon }) => (
          <article key={label} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-start justify-between">
              <span className="text-sm font-medium text-slate-400">{label}</span>
              <Icon size={19} className="text-cyan-400" />
            </div>
            <p className="mt-5 text-3xl font-bold">{value}</p>
            <p className="mt-2 text-sm text-emerald-400">{change}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">My priority tasks</h3>
              <p className="mt-1 text-sm text-slate-400">Tasks assigned to you across all projects.</p>
            </div>
            <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300">
              View all
            </button>
          </div>

          <div className="mt-5 divide-y divide-slate-800">
            {tasks.map((task) => (
              <div key={task.title} className="flex items-center justify-between gap-4 py-4">
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{task.project}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">{task.status}</span>
                  <span className="rounded-full bg-amber-400/10 px-3 py-1 text-amber-300">{task.priority}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Sprint progress</h3>
            <ArrowUpRight size={18} className="text-cyan-400" />
          </div>

          <div className="mt-8 grid place-items-center">
            <div className="grid h-36 w-36 place-items-center rounded-full border-[14px] border-cyan-400 border-r-slate-800">
              <div className="text-center">
                <p className="text-3xl font-bold">68%</p>
                <p className="text-xs text-slate-400">completed</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between text-sm">
            <span className="text-slate-400">Current sprint</span>
            <span className="font-medium">17 / 25 tasks</span>
          </div>
        </article>
      </section>
    </div>
  )
}

export default DashboardPage