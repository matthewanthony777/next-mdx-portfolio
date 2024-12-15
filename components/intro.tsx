import Image from 'next/image'
import authorImage from '@/public/images/authors/matthew.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Matthew Anthony Barr.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          As a tech professional and advocate. I provide insight in all things technology, law and media.
          particularly focused on leveraging technology and law as tools for
          social change.
          
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Matthew Anthony Barr'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
