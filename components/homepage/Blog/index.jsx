import React from 'react'
import Container from '@/components/container'
import BlogCard from '../blogCard'

export default function Blog() {
  return (
    <div className="flex justify-center pt-20">
        <Container className="flex gap-5 flex-col">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
              Blog
            </h2>
            <p className="text-sm md:text-lg text-slate-600 text-center max-w-[800px] mt-2.5">
            Mulai dari artikel inspiratif hingga panduan praktis, temukan informasi terbaru seputar event dan tips-tips berguna untuk sukses di industri event.
            </p>
          </div>

          <div className="w-full flex gap-3 flex-wrap md:flex-nowrap mt-8">
            <BlogCard
              image="/homepage/event-services.png"
              title="10 Tips Efektif dalam Manajemen Event yang Sukses"
              text="Dalam industri event, manajemen yang efektif adalah kunci keberhasilan. Dengan mempertimbangkan berbagai aspek mulai dari perencanaan hingga eksekusi, berikut adalah 10 tips yang dapat membantu Anda mengelola event Anda dengan sukses."
              createdAt="Admin | May 17, 2024"
              href="/"
            />
            <BlogCard
              image="/homepage/sponsor-services.png"
              title="10 Tips Efektif dalam Manajemen Event yang Sukses"
              text="Dalam industri event, manajemen yang efektif adalah kunci keberhasilan. Dengan mempertimbangkan berbagai aspek mulai dari perencanaan hingga eksekusi, berikut adalah 10 tips yang dapat membantu Anda mengelola event Anda dengan sukses."
              createdAt="Admin | May 17, 2024"
              href="/"
            />
            <BlogCard
              image="/homepage/sponsor-services.png"
              title="10 Tips Efektif dalam Manajemen Event yang Sukses"
              text="Dalam industri event, manajemen yang efektif adalah kunci keberhasilan. Dengan mempertimbangkan berbagai aspek mulai dari perencanaan hingga eksekusi, berikut adalah 10 tips yang dapat membantu Anda mengelola event Anda dengan sukses."
              createdAt="Admin | May 17, 2024"
              href="/"
            />
          </div>
        </Container>
      </div>
  )
}
