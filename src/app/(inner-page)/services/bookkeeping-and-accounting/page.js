import servicesData from '@/data/services-data.json';
import MainServicePage from '@/components/service-pages/MainServicePage';

export const metadata = {
    title: 'Bookkeeping & Accounting Services | Taxfello',
    description: 'Professional bookkeeping and accounting services — monthly bookkeeping, financial statements, bank reconciliation, audit support. Cloud-based, accurate, and audit-ready.',
    keywords: ['bookkeeping services', 'accounting services', 'financial statements', 'bank reconciliation', 'Tally bookkeeping', 'Zoho Books accounting']
};

export default function BookkeepingAccountingPage() {
    const serviceData = servicesData.mainServices.find(s => s.id === 'bookkeeping');
    return <MainServicePage serviceData={serviceData} />;
}
