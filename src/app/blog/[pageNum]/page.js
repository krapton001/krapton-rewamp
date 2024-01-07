import { HOST } from '@/constants';
import { webPageSchema } from '@/seo-utils/webPageSchema';
import { organizationSchema } from '@/seo-utils/organizationSchema';
import { siteNavigationElement } from '@/seo-utils/siteNavigationElement';
import { breadCrumbSchema } from '@/seo-utils/breadCrumbSchema';
import { createMetaData } from '@/seo-utils/CommonMeta';
import BlogPage from '@/components/page-partials/Blog';
import { randomNumber } from '@/constants';

const url = `${HOST}/blog`;
const title = `Krapton - Let's build something amazing together`;
const description = `Krapton is a leading provider of cutting-edge software development and digital services. With years of experience, we specialize in transforming your innovative ideas into scalable and dynamic digital products.`;
const keywords = `Website development, App development, web solutions, web services, payment gateway integrations`;

export const metadata = {
    ...createMetaData({ title, description, keywords, url }),
};

export default async function (props) {
    const { params = { pageNum: '2' } } = props;
    const res = await fetch(`https://krapton.com/api/blog?limit=9&page=${params.pageNum}&random=${randomNumber}`);
    const { data, pagination = {} } = await res.json();

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={webPageSchema(title, description, keywords, url)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={organizationSchema()} />
            <script type="application/ld+json" dangerouslySetInnerHTML={siteNavigationElement()} />
            <script type="application/ld+json" dangerouslySetInnerHTML={breadCrumbSchema()} />
            <BlogPage blogs={data} pagination={pagination} />
        </>
    );
}
