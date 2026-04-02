import { render, screen } from '@testing-library/react'
import { Newsletter } from './Newsletter'
import { expect, test } from 'vitest'

test('Newsletter component renders correctly', () => {
  render(<Newsletter />)
  
  // Check headings and text
  expect(screen.getByText(/Join the Inner Circle/i)).toBeInTheDocument()
  expect(screen.getByText(/Exclusive access to new collections/i)).toBeInTheDocument()
  
  // Check input and button
  expect(screen.getByPlaceholderText(/Email Address/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
})
