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

