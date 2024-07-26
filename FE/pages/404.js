import Link from 'next/link';
// import Image from 'next/image';
// import FullLayout from '../components/layout/FullLayout';
import Full404Layout from '../components/layout/404Layout';
import { useTranslations } from 'next-intl';

export default function Custom404() {
    const t = useTranslations();

    return (
        <div className="container main-bg bg-white rounded-lg pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
            404
        </div>
    );
}

Custom404.Layout = Full404Layout;

export const getStaticProps = ({ locale }) => {
    return {
        props: {
            messages: {
                ...require(`../messages/${locale}.json`)
            }
        }
    };
};
