import { Toaster } from 'sonner'
import Footer from './Footer'
import Header from './Header'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function PageWrapper({
  children,
  className = '',
}: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 w-full mx-auto ${className}`}>{children}</main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            color: '#ffffff',
            fontFamily: "'EB Garamond', Georgia, serif",
          },
          classNames: {
            success: '!bg-[#06755b]',
            error: '!bg-[#7d1212]',
            warning: '!bg-[#a78925]',
            info: '!bg-[#52297a]',
          },
        }}
      />
    </div>
  )
}
