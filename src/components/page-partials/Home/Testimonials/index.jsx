import LazyImg from "@/components/common/LazyImg"
import { featuredTestimonial, testimonials } from "@/data/testimonials"
import dynamic from "next/dynamic"

  const Background  =  dynamic(() => import('../../../common/GradientBg').then((mod) => mod.background2))
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Testimonials() {

    return (
      <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
        <Background />
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primaryDark">Testimonials</h2>
            <p className="mt-2 text-3xl xl:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <LazyImg
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={featuredTestimonial.author.imageUrl}
                  alt={featuredTestimonial.author.name}
                />
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <LazyImg className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt={featuredTestimonial.author.name} />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <LazyImg className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt={featuredTestimonial.author.name} />
                          <div>
                            <div className="font-semibold">{testimonial.author.name}</div>
                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  