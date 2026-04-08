import { Toaster } from 'sonner'
import Header from '@/features/home/HomeHeader'
import Footer from '@/features/home/HomeFooter'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 min-h-0">{children}</main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            color: '#ffffff',
            fontFamily: "'Alegreya', Georgia, serif",
          },
          classNames: {
            success: '!bg-[#06755b] !border-[#06755b]',
            error: '!bg-[#6B0F0F] !border-[#6B0F0F]',
            warning: '!bg-[#b89000] !border-[#b89000]',
            info: '!bg-[#3E6EB6] !border-[#3E6EB6]',
          },
        }}
      />
    </div>
  )
}
