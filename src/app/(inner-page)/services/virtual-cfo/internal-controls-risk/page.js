import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Internal Controls & Risk Management | Taxfello',
    description: 'Finance SOPs, internal control reviews, risk registers and compliance trackers. Protect your business from fraud, process failures and compliance gaps.',
    keywords: ['internal controls', 'finance SOP', 'risk register', 'compliance tracker', 'internal audit', 'risk management']
};

export default function InternalControlsRiskPage() {
    const subData = servicesData.subServices.find(s => s.id === 'internal-controls-risk');
    const parentData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
