import { redirect } from 'next/navigation'

export default function Home() {

  redirect('/dashboard/main')

  // el redirect retorna never
  return (
    <>
    </>
  )
}
