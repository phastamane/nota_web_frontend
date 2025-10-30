import FAT from '@/assets/images/clients/FAT.webp'
import ABA from '@/assets/images/clients/ABA.webp'
import Iden from '@/assets/images/clients/iden.webp'
import Mismo from '@/assets/images/clients/mismo.webp'


export default function Clients(){

    const pathOfImgs: string[] = [FAT, ABA, Iden, Mismo]
    return(
        <section className='flex'>
            <div className="flex mx-auto max-lg:grid max-lg:grid-rows-2 max-lg:grid-cols-2 max-lg:gap-30 max-md:gap-10 max-md:px-4">
                {pathOfImgs.map((label) => (
                    <img src={label} alt="label" key={label} />
                ))}
            </div>
        </section>
    )
}