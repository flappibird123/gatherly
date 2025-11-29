"use client"

import ErrorPage from '@/components/UI/Error'


interface ErrorProps {
  error: Error;
  reset: () => void;
}


export default function Error({ error, reset }: ErrorProps) {
    return <ErrorPage error={error} reset={reset} />
}