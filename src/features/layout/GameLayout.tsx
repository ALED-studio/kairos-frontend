import { Toaster } from 'sonner'

interface GameLayoutProps {
  children: React.ReactNode
}

export default function GameLayout({ children }: GameLayoutProps) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <main className="flex-1 min-h-0">{children}</main>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            color: '#ffffff',
            fontFamily: "'Alegreya', Georgia, serif",
          },
          classNames: {
            success: '!bg-[#06755b]',
            error: '!bg-[#7d1212]',
            warning: '!bg-[#a78925]',
            info: '!bg-[#3E6EB6]',
          },
        }}
      />
    </div>
  )
}
