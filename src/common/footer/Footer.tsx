import telegram from '@/assets/images/footer/telegram.svg'
import facebook from '@/assets/images/footer/facebook.svg'
import mail from '@/assets/images/footer/mail.svg'
import github from '@/assets/images/footer/github.svg'

export default function Footer() {
  const links = [telegram, facebook, mail, github]

  return (
    <footer className="w-full bg-gray-100">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 py-4 overflow-x-hidden">
          <img src="logo.svg" alt="Logo"
               className="h-10 w-auto object-contain shrink-0" />
          <div className="flex items-center gap-3 flex-wrap max-w-full">
            {links.map((link) => (
              <img
                key={link}
                src={link}
                alt=""
                className=" w-8 object-contain shrink-0 cursor-pointer"
              />
            ))}
          </div>
        </div>
        <p className='text-xs text-gray-400 justify-self-end'>@2025 ProNotary</p>
        <p className='text-xs text-gray-400 justify-self-end'>Все права защищены</p>
      </div>
    </footer>
  )
}
