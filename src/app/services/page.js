import HomePage from '@/components/page-partials/Home';
import { HOST } from '@/constants';
import { webPageSchema } from '@/components/seo/webPageSchema';
import { organizationSchema } from '@/components/seo/organizationSchema';
import { siteNavigationElement } from '@/components/seo/siteNavigationElement';
import { breadCrumbSchema } from '@/components/seo/breadCrumbSchema';
import { createMetaData } from '@/components/seo/CommonMeta';

const url = `${HOST}/services`;
const title = `Krapton - Let's build something amazing together`;
const description = `Krapton is a leading provider of cutting-edge software development and digital services. With years of experience, we specialize in transforming your innovative ideas into scalable and dynamic digital products.`;
const keywords = `Website development, App development, web solutions, web services, payment gateway integrations`;

export const metadata = {
    ...createMetaData({ title, description, keywords, url }),
};

export default function () {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={webPageSchema(title, description, keywords, url)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={organizationSchema()} />
            <script type="application/ld+json" dangerouslySetInnerHTML={siteNavigationElement()} />
            <script type="application/ld+json" dangerouslySetInnerHTML={breadCrumbSchema()} />
            <HomePage />;
        </>
    );
}
