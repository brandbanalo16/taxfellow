import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'GST Registration & Compliance Services | Taxfello',
    description: 'GST registration, return filing, ITC reconciliation, notice reply, and refund applications. Expert GST compliance team for businesses across India.',
    keywords: ['GST registration', 'GST return filing', 'GSTR-1', 'GSTR-3B', 'GST compliance', 'ITC reconciliation', 'GST notice reply']
};

export default function GSTRegistrationPage() {
    const subData = servicesData.subServices.find(s => s.id === 'gst-registration-and-compliance');
    const parentData = servicesData.mainServices.find(s => s.id === 'registration');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
