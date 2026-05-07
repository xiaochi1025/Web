import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Counter } from '@/features/counter'

describe('Counter', () => {
  it('renders counter with initial value', () => {
    render(<Counter initialCount={5} />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('increments counter on button click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    render(<Counter initialCount={0} />)
    
    const incrementButton = screen.getByText('+')
    await userEvent.click(incrementButton)
    
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrements counter on button click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    render(<Counter initialCount={5} />)
    
    const decrementButton = screen.getByText('-')
    await userEvent.click(decrementButton)
    
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('resets counter to initial value', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    render(<Counter initialCount={10} />)
    
    const incrementButton = screen.getByText('+')
    const resetButton = screen.getByText('Reset')
    
    await userEvent.click(incrementButton)
    await userEvent.click(resetButton)
    
    expect(screen.getByText('10')).toBeInTheDocument()
  })
})
