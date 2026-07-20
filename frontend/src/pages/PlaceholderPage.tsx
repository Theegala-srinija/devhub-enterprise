type PlaceholderPageProps = {
  title: string
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 p-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-slate-400">
        This module will be implemented in an upcoming DevHub phase.
      </p>
    </div>
  )
}

export default PlaceholderPage