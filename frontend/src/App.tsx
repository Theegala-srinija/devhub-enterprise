import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import DashboardPage from './pages/DashboardPage'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
        <Route path="/tasks" element={<PlaceholderPage title="Tasks" />} />
        <Route path="/bugs" element={<PlaceholderPage title="Bug Tracking" />} />
        <Route path="/teams" element={<PlaceholderPage title="Teams" />} />
        <Route path="/calendar" element={<PlaceholderPage title="Calendar" />} />
        <Route path="/analytics" element={<PlaceholderPage title="Analytics" />} />
        <Route path="/notifications" element={<PlaceholderPage title="Notifications" />} />
        <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
      </Route>
    </Routes>
  )
}

export default App