import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import sino from '../../assets/navbar/sino.svg'

export default function Navbar() {
    return (
        <header className="w-screen h-16 px-3 border-1 border-gray-300 rounded-t-lg lg:px-20">
            <div className="w-full h-full flex justify-between items-center">

                <Image
                    src="/navbar/doc-navbar.png"
                    width={133}
                    height={28}
                    alt='logo docverify'
                />

                <div className='flex justify-center items-center gap-2'>
                    <Image 
                        src={sino}
                        width={16}
                        height={18}
                        alt='sino'
                    />
                    <Avatar className={undefined}>
                        <AvatarImage src="/navbar/user-navbar.svg" className={undefined} />
                        <AvatarFallback className={undefined}>CN</AvatarFallback>
                    </Avatar>

                </div>
            </div>
        </header>
    )
}