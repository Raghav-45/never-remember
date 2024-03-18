export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">{children}</div>
    </div>
  )
}
