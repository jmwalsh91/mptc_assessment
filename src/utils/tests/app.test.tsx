import { screen } from '@testing-library/react'
import { it } from 'vitest'
import { describe } from 'vitest'

import { App } from '../../App'

import { render } from './index'

describe('landing page', () => {
  it('should render the landing page', () => {
    render(<App />)
    expect(screen.getByText('MPTC ASSESSMENT')).toBeInTheDocument()
  })
})
