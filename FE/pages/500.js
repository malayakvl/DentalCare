import Link from 'next/link';
import FullLayout from '../components/layout/FullLayout';

export default function Custom500() {
    return (
        <div className="container bg-white rounded-lg pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
            500
        </div>
    );
}

Custom500.Layout = FullLayout;

export const getStaticProps = ({ locale = 'fr' }) => {
    return {
        props: {
            messages: {
                ...require(`../messages/${locale}.json`)
            }
        }
    };
};
