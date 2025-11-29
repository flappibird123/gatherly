import { UserData } from '@/types/user-data'

export interface SignInProps {
  changeMode: (mode: string) => void;
  sendData: (data: UserData) => void;
  error: string;
}