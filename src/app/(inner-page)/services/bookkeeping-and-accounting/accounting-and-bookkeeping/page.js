import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Accounting & Bookkeeping Services | Taxfello',
    description: 'Monthly bookkeeping, bank reconciliation, accounts finalisation, financial statements, audit support on Tally, Zoho Books, and QuickBooks. Always audit-ready.',
    keywords: ['bookkeeping services', 'accounting services', 'monthly bookkeeping', 'financial statements', 'bank reconciliation', 'Tally bookkeeping']
};

export default function AccountingBookkeepingPage() {
    const subData = servicesData.subServices.find(s => s.id === 'accounting-and-bookkeeping');
    const parentData = servicesData.mainServices.find(s => s.id === 'bookkeeping');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
