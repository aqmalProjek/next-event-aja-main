import React from 'react'
import ServicesCard from '../servicesCard'
import Container from '@/components/container'

export default function Services() {
  return (
    <div className="flex justify-center pt-20">
        <Container className="flex gap-5 flex-col">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-center">
              Layanan Kami
            </h2>
            <p className="text-sm md:text-lg mt-2.5 text-center max-w-[800px]">
              Event Aja menawarkan berbagai layanan untuk mendukung kesuksesan
              event Anda. Mulai dari perencanaan, manajemen, hingga kolaborasi
              dengan sponsor, kami menyediakan solusi lengkap yang dapat
              disesuaikan dengan kebutuhan khusus setiap event.
            </p>
          </div>

          <div className="w-full grid md:grid-cols-3 gap-5 mt-8 ">
            <ServicesCard
              image="/homepage/event-services.png"
              title="Event"
              text="Kami membantu Anda merencanakan setiap detail event dari awal hingga akhir, memastikan semua kebutuhan terpenuhi dengan sempurna."
              href="/events"
            />
            <ServicesCard
              image="/homepage/event-organizer-services.png"
              title="Event Organizer"
              text="Dari logistik hingga koordinasi di hari-H, kami mengelola semua aspek agar event berjalan lancar dan sukses."
              href="/events"
            />
            <ServicesCard
              image="/homepage/sponsor-services.png"
              title="Sponsor"
              text="Kami menghubungkan Anda dengan sponsor yang tepat, membantu membangun kemitraan yang saling menguntungkan."
              href="/events"
            />
          </div>
        </Container>
      </div>
  )
}
