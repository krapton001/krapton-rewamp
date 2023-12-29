import { HOST } from '@/constants';

export const createMetaData = ({
    url = `${HOST}`,
    title = `Krapton - Let's build something amazing together`,
    description = `Karpton is a leading provider of cutting-edge software development and digital services. With years of experience, we specialize in transforming your innovative ideas into scalable and dynamic digital products.`,
    keywords = `Wesbite development, App development, web solutions, web services, payment gateway integrations`,
} = {}) => {
    return {
        title,
        description,
        keywords,
        url,
        openGraph: {
            type: 'website',
            url: url,
            title,
            description
          },
          twitter: {
            description,
            card: 'summary_large_image',
          },
    };
};
