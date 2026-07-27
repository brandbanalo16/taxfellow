import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Cash Flow & Working Capital Management | Taxfello',
    description: 'Cash flow monitoring, receivable & payable ageing review, and working capital planning. Never run out of cash with our Virtual CFO support.',
    keywords: ['cash flow management', 'working capital planning', 'receivable ageing', 'payable ageing', 'cash flow monitoring', 'liquidity management']
};

export default function CashFlowWorkingCapitalPage() {
    const subData = servicesData.subServices.find(s => s.id === 'cash-flow-working-capital');
    const parentData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
