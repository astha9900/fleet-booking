"use client"

export type UserRole = "admin" | "customer" | "driver"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  phone?: string
  address?: string
  photoUrl?: string
  licenseNumber?: string
  vehicleAssigned?: string
  emergencyReady?: boolean
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const storedUser = localStorage.getItem("fleet-user")
  return storedUser ? JSON.parse(storedUser) : null
}

export function setCurrentUser(user: User): void {
  if (typeof window === "undefined") return
  localStorage.setItem("fleet-user", JSON.stringify(user))
}

export function logout(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("fleet-user")
  window.location.href = "/login"
}

export function login(email: string, password: string): { success: boolean; user?: User; error?: string } {
  // <CHANGE> Demo credentials for testing
  const demoUsers: Record<string, { password: string; user: User }> = {
    "admin@fleet.com": {
      password: "admin123",
      user: {
        id: "admin-1",
        name: "Fleet Admin",
        email: "admin@fleet.com",
        role: "admin",
        phone: "+1234567890",
        photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
      },
    },
    "customer@fleet.com": {
      password: "customer123",
      user: {
        id: "customer-1",
        name: "John Customer",
        email: "customer@fleet.com",
        role: "customer",
        phone: "+1234567891",
        address: "123 Main St, City",
        photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer",
      },
    },
    "driver@fleet.com": {
      password: "driver123",
      user: {
        id: "driver-1",
        name: "Mike Driver",
        email: "driver@fleet.com",
        role: "driver",
        phone: "+1234567892",
        address: "456 Oak Ave, City",
        licenseNumber: "DL-2024-5678",
        vehicleAssigned: "MH12AB1234",
        emergencyReady: true,
        photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=driver",
      },
    },
  }

  const userData = demoUsers[email.toLowerCase()]
  
  if (!userData) {
    return { success: false, error: "User not found" }
  }

  if (userData.password !== password) {
    return { success: false, error: "Invalid password" }
  }

  setCurrentUser(userData.user)
  return { success: true, user: userData.user }
}

export function signup(name: string, email: string, password: string, phone: string): { success: boolean; user?: User; error?: string } {
  // <CHANGE> Only customers can sign up
  const existingUser = getCurrentUser()
  
  // Check if email already exists (in real app, check database)
  const demoEmails = ["admin@fleet.com", "customer@fleet.com", "driver@fleet.com"]
  if (demoEmails.includes(email.toLowerCase())) {
    return { success: false, error: "Email already registered" }
  }

  const newUser: User = {
    id: `customer-${Date.now()}`,
    name,
    email,
    role: "customer",
    phone,
    photoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
  }

  setCurrentUser(newUser)
  return { success: true, user: newUser }
}
