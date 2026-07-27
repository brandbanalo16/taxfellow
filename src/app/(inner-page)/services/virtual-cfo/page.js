import servicesData from '@/data/services-data.json';
import MainServicePage from '@/components/service-pages/MainServicePage';

export const metadata = {
    title: 'Virtual CFO Services | Taxfello',
    description: 'CFO-level financial strategy without the full-time cost. Financial planning, MIS reporting, cash flow management, investor support, and monthly CFO retainer for SMEs and startups.',
    keywords: ['virtual CFO', 'CFO services', 'financial planning', 'MIS reporting', 'cash flow management', 'investor support']
};

export default function VirtualCFOPage() {
    const serviceData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <MainServicePage serviceData={serviceData} />;
}
