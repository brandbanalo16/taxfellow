import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Income Tax Filing Services | Taxfello',
    description: 'ITR filing for individuals, businesses, LLPs, NRIs. TDS returns, Form 16, notice replies and advance tax planning. On-time, accurate, zero penalties.',
    keywords: ['income tax filing', 'ITR filing', 'TDS return filing', 'Form 16', 'NRI tax return', 'tax return India']
};

export default function IncomeTaxFilingPage() {
    const subData = servicesData.subServices.find(s => s.id === 'income-tax-filing');
    const parentData = servicesData.mainServices.find(s => s.id === 'compliances');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
