import { UserData } from '@/types/user-data'

export interface UserDataProps {
    sendData: (data: UserData) => void
}