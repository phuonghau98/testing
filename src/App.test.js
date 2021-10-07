import React from 'react'

import { render, screen } from '@testing-library/react'
import App from './App'


it('Render application', () => {
  render(<App />)
  expect(screen.getByText('Todo')).toBeInTheDocument()
})