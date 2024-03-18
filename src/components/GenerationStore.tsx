import { LoginDetailsTypeWithId } from '@/lib/dbUtils'
import { create } from 'zustand'

interface generationState {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  userLoginDetails: LoginDetailsTypeWithId[]
  setUserLoginDetails: (userLoginDetails: LoginDetailsTypeWithId[]) => void
}

export const useGenerationStore = create<generationState>()((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  userLoginDetails: [],
  setUserLoginDetails: (userLoginDetails: LoginDetailsTypeWithId[]) => set({ userLoginDetails }),
}))