import FAT from '@/assets/images/clients/FAT.webp'
import ABA from '@/assets/images/clients/ABA.webp'
import Iden from '@/assets/images/clients/iden.webp'
import Mismo from '@/assets/images/clients/mismo.webp'


export default function Clients(){

    const pathOfImgs: string[] = [FAT, ABA, Iden, Mismo]
    return(
        <section className='flex'>
            <div className="flex mx-auto">
                {pathOfImgs.map((label, i) => (
                    <img src={label} alt="label" key={label} />
                ))}
            </div>
        </section>
    )
}