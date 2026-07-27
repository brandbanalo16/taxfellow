import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Banking & Project Finance Services | Taxfello',
    description: 'Project reports for bank loans, CMA data preparation, cash flow projections, drawing power calculations, stock statements and MSME loan advisory.',
    keywords: ['project report bank loan', 'CMA data', 'cash flow projection', 'MSME loan', 'drawing power', 'bank finance']
};

export default function BankingProjectFinancePage() {
    const subData = servicesData.subServices.find(s => s.id === 'banking-project-finance');
    const parentData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
