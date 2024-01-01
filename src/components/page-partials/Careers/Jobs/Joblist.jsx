import HyperLink from '@/components/common/HyperLink';

const jobs = [
    {
        id: 1,
        name: 'Java Developer',
    },
    {
        id: 2,
        name: 'React Developer',
    },
    {
        id: 3,
        name: 'Node JS Developer',
    },
    {
        id: 4,
        name: 'iOS Developer',
    },
    {
        id: 5,
        name: 'Laravel Developer',
    },
];

export default function Joblist() {
    return (
        <ul className="divide-y divide-gray-100 border-2 rounded-lg p-4">
            {jobs.map((job) => (
                <li key={job.id} className="flex items-center justify-between gap-x-6 py-5">
                    <div className="min-w-0">
                        <div className="flex items-start gap-x-3">
                            <p className="text-lg font-semibold leading-6 text-gray-900">{job.name}</p>
                            <p className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset">Remote</p>
                        </div>
                    </div>
                    <div className="flex flex-none items-center gap-x-4">
                        <HyperLink type="outline">Apply</HyperLink>
                    </div>
                </li>
            ))}
        </ul>
    );
}

{
    /* <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
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
          </div> */
}
