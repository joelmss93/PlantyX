import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}
