import { UserData } from '@/types/user-data'
import { SocialAuthButtonProps } from '@/types/social-auth-props'

export interface SignInProps {
  changeMode: (mode: string) => void;
  sendData: (data: UserData) => void;
  error: string;
  sendSocialAuth: (provider: "google" | "github") => Promise<void>;
}