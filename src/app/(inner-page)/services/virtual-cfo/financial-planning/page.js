import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Financial Planning Services | Taxfello Virtual CFO',
    description: 'Projected financial statements, annual budgets, business plans, financial models and rolling forecasts. Investor-grade financial planning by Virtual CFO experts.',
    keywords: ['financial planning', 'projected financial statements', 'annual budget', 'financial model', 'business plan', 'rolling forecast']
};

export default function FinancialPlanningPage() {
    const subData = servicesData.subServices.find(s => s.id === 'financial-planning');
    const parentData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
