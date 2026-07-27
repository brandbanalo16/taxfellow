import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Profitability & Cost Control Services | Taxfello',
    description: 'Cost optimisation reviews, pricing and unit economics advisory, and product margin analysis. Grow revenue while maximising your business margins.',
    keywords: ['cost optimisation', 'profitability analysis', 'unit economics', 'pricing strategy', 'margin analysis', 'cost control']
};

export default function ProfitabilityCostControlPage() {
    const subData = servicesData.subServices.find(s => s.id === 'profitability-cost-control');
    const parentData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
