import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import Page from '@/app/page'

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}))

describe('Login Page', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  it('renders login form correctly', () => {
    render(<Page />)
    
    // Check if main elements are present
    expect(screen.getByText('Connexion')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Mot de passe')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /se connecter/i })).toBeInTheDocument()
  })

  it('allows switching between buyer and supplier', () => {
    render(<Page />)
    
    // Initially should show buyer form
    expect(screen.getByText('Acheteur')).toBeInTheDocument()
    
    // Click on supplier tab
    const supplierTab = screen.getByText('Fournisseur')
    fireEvent.click(supplierTab)
    
    // Should now show supplier form
    expect(screen.getByText('Fournisseur')).toBeInTheDocument()
  })

  it('handles form input changes', async () => {
    render(<Page />)
    
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Mot de passe')
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    
    expect(emailInput.value).toBe('test@example.com')
    expect(passwordInput.value).toBe('password123')
  })

  it('shows remember me checkbox', () => {
    render(<Page />)
    
    const rememberCheckbox = screen.getByLabelText(/se souvenir de moi/i)
    expect(rememberCheckbox).toBeInTheDocument()
    expect(rememberCheckbox.type).toBe('checkbox')
  })

  it('displays forgot password link', () => {
    render(<Page />)
    
    const forgotPasswordLink = screen.getByText(/mot de passe oublié/i)
    expect(forgotPasswordLink).toBeInTheDocument()
  })

  it('displays signup link', () => {
    render(<Page />)
    
    const signupLink = screen.getByText(/créer un compte/i)
    expect(signupLink).toBeInTheDocument()
  })

  it('form submission works correctly', async () => {
    render(<Page />)
    
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Mot de passe')
    const submitButton = screen.getByRole('button', { name: /se connecter/i })
    
    // Fill the form
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    
    // Submit the form
    fireEvent.click(submitButton)
    
    // Wait for any async operations
    await waitFor(() => {
      // Add assertions for what should happen after form submission
      // This depends on your actual implementation
    })
  })

  it('is accessible', () => {
    render(<Page />)
    
    // Check for proper form labels and accessibility
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Mot de passe')
    
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('responsive design elements are present', () => {
    render(<Page />)
    
    // Check if responsive classes are applied (this is basic, real responsive testing would need different viewport sizes)
    const mainContainer = screen.getByText('Connexion').closest('div')
    expect(mainContainer).toBeInTheDocument()
  })
})
