import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'

const Leads = lazy(() => import('./components/Leads'))
const CallLogs = lazy(() => import('./components/CallLogs'))


export default function App() {
return (
<AuthProvider>
<BrowserRouter>
<Layout>
<Suspense fallback={<p className="p-6">Loading...</p>}>
<Routes>
<Route path="/" element={<Leads />} />
<Route path="/calls" element={<CallLogs />} />
</Routes>
</Suspense>
</Layout>
</BrowserRouter>
</AuthProvider>
)
}