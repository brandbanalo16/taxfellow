import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Payroll & Labour Compliance Services | Taxfello',
    description: 'End-to-end payroll processing, PF & ESIC return filing, salary slips, professional tax, HR policies and labour law compliance. Accurate and on-time every month.',
    keywords: ['payroll processing', 'PF return filing', 'ESIC return', 'salary slip generation', 'professional tax', 'HR policy drafting']
};

export default function PayrollLabourPage() {
    const subData = servicesData.subServices.find(s => s.id === 'payroll-labour-compliance');
    const parentData = servicesData.mainServices.find(s => s.id === 'compliances');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
