import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'ROC / MCA Compliance Services | Taxfello',
    description: 'Company annual filing AOC-4 MGT-7, LLP filings, director KYC, share allotment, INC-20A, company strike off and all MCA event-based compliances.',
    keywords: ['ROC compliance', 'MCA annual filing', 'AOC-4', 'MGT-7', 'director KYC', 'DIR-3 KYC', 'company annual return']
};

export default function ROCMCACompliancePage() {
    const subData = servicesData.subServices.find(s => s.id === 'roc-mca-compliance');
    const parentData = servicesData.mainServices.find(s => s.id === 'compliances');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
