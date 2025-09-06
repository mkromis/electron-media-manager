import Versions from '@renderer/components/Versions'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/')({
  component: RouteComponent
})

function RouteComponent() {
  const response = window.ping().then((res) => console.log('Settings', res))
  console.log('Response from main:', response)

  return (
    <div>
      <h1>Settings</h1>
      <p>
        <Versions />
      </p>
    </div>
  )
}
